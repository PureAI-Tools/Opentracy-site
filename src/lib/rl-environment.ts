export type Team = 0 | 1;
export type Phase = 0 | 1 | 2 | 3;
export const EPISODES = 4;

export type EnvironmentState = {
  phase: Phase;
  episode: number;
  blocked: Team;
  action: Team;
  values: [number, number];
  playing: boolean;
  done: boolean;
};

export type EnvironmentAction =
  | { type: "tick" | "step" | "play" | "pause" | "reset" }
  | { type: "environment"; blocked: Team };

export function initialEnvironment(blocked: Team = 0): EnvironmentState {
  return { phase: 0, episode: 1, blocked, action: 0, values: [0, 0], playing: false, done: false };
}

export function rewardFor(state: EnvironmentState) {
  return state.action === state.blocked ? -1 : 1;
}

// A one-step episodic task: allocate one request, observe the reward, then reset
// team capacity. Greedy action selection and a 0.6 learning rate keep this small
// educational example deterministic. The UI explicitly labels it illustrative.
function advance(state: EnvironmentState): EnvironmentState {
  if (state.done) return state;
  if (state.phase === 0) {
    return { ...state, phase: 1, action: state.values[1] > state.values[0] ? 1 : 0 };
  }
  if (state.phase === 1) return { ...state, phase: 2 };
  if (state.phase === 2) {
    const values: [number, number] = [...state.values];
    values[state.action] += 0.6 * (rewardFor(state) - values[state.action]);
    return { ...state, phase: 3, values };
  }
  return state.episode === EPISODES
    ? { ...state, done: true, playing: false }
    : { ...state, phase: 0, episode: state.episode + 1 };
}

export function environmentReducer(state: EnvironmentState, action: EnvironmentAction): EnvironmentState {
  switch (action.type) {
    case "tick": return state.playing ? advance(state) : state;
    case "step": return advance({ ...state, playing: false });
    case "play": return { ...(state.done ? initialEnvironment(state.blocked) : state), playing: true };
    case "pause": return { ...state, playing: false };
    case "reset": return initialEnvironment(state.blocked);
    case "environment": return initialEnvironment(action.blocked);
  }
}
