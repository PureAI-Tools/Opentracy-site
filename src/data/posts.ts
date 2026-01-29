export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "introducing-lunar-distillation",
    title: "Introducing Lunar: Automated Distillation for Production LLMs",
    date: "2024-01-15",
    summary:
      "Today we're launching Lunar, a platform that automatically creates Small Language Models from your production traces, cutting inference costs by up to 57%.",
    tags: ["announcement", "product"],
    content: `
# Introducing Lunar: Automated Distillation for Production LLMs

Today we're launching Lunar, a platform that automatically creates Small Language Models from your production traces, cutting inference costs by up to 57%.

## The Problem

Running LLMs in production is expensive. Most teams start with GPT-4 or Claude for quality, then struggle to optimize costs as they scale. The options are limited:

- **Prompt engineering**: Limited gains, lots of trial and error
- **Caching**: Only helps with exact matches
- **Cheaper models**: Quality drops significantly

## Our Solution

Lunar takes a different approach. We analyze your production traces—the actual inputs and outputs from your LLM calls—and use them to train a smaller, specialized model that handles your specific use case.

### How It Works

1. **Connect your traces**: Point Lunar at your production logs
2. **Automated curation**: We filter and prepare high-quality training data
3. **Distillation**: Train a small model on your specific domain
4. **Evaluation**: Comprehensive testing against your success criteria
5. **Deployment**: One-click deploy to your infrastructure

## Results

In our beta, customers saw:
- 57% average cost reduction
- Sub-100ms latency (down from 2-3 seconds)
- 95%+ quality retention on domain-specific tasks

## Get Started

Lunar is available today. Sign up for free at lunar.dev and start cutting your LLM costs.
    `,
  },
  {
    slug: "distillation-explained",
    title: "Knowledge Distillation: How to Train Small Models from Large Ones",
    date: "2024-01-10",
    summary:
      "A technical deep-dive into knowledge distillation and how we use it to create production-ready Small Language Models.",
    tags: ["technical", "research"],
    content: `
# Knowledge Distillation: How to Train Small Models from Large Ones

Knowledge distillation is a technique for transferring knowledge from a large "teacher" model to a smaller "student" model. In this post, we'll explore how it works and why it's particularly effective for production LLM use cases.

## What is Distillation?

At its core, distillation involves training a smaller model to mimic the behavior of a larger model. The key insight is that the larger model's outputs contain more information than just the final answer—they encode the model's "confidence" across all possible outputs.

## Why Distillation Works

Large language models are trained on massive, general datasets. But in production, you're usually solving a much narrower problem. A support chatbot doesn't need to know how to write poetry or solve calculus problems.

By distilling on your specific use case, we create a model that's:
- **Smaller**: Fewer parameters means faster inference
- **Focused**: Optimized for your exact domain
- **Cheaper**: Runs on smaller hardware

## The Lunar Approach

We've developed several innovations that make distillation practical:

### Trace-Based Training
Instead of synthetic data, we use your actual production traces. This ensures the model learns from real examples.

### Automated Curation
Not all traces are equal. We automatically filter for high-quality examples that will improve model performance.

### Continuous Evaluation
We continuously evaluate the distilled model against the teacher, ensuring quality is maintained.

## Results

Our approach consistently achieves 95%+ quality retention while reducing model size by 10-100x.
    `,
  },
  {
    slug: "cost-optimization-strategies",
    title: "5 Strategies for Reducing LLM Inference Costs",
    date: "2024-01-05",
    summary:
      "Practical strategies for reducing your LLM inference costs, from simple optimizations to advanced techniques like distillation.",
    tags: ["guide", "optimization"],
    content: `
# 5 Strategies for Reducing LLM Inference Costs

LLM inference is expensive. Here are five strategies for reducing costs, ordered from simplest to most impactful.

## 1. Prompt Optimization

The simplest optimization: use fewer tokens. Review your prompts for unnecessary verbosity. Remove examples that don't improve output quality.

**Impact**: 10-30% cost reduction

## 2. Response Caching

Cache responses for identical or similar queries. This works well for FAQs and common questions.

**Impact**: Varies widely (0-50% depending on query patterns)

## 3. Model Routing

Route simple queries to cheaper models, complex queries to expensive ones. Requires building a classifier.

**Impact**: 20-40% cost reduction

## 4. Batching

Batch multiple requests together when latency allows. Most providers offer discounts for batch processing.

**Impact**: 10-20% cost reduction

## 5. Distillation

Train a small, specialized model on your use case. This is the most impactful but requires more setup.

**Impact**: 50-80% cost reduction

## Conclusion

Start with prompt optimization and caching. As you scale, invest in routing and distillation for maximum savings.
    `,
  },
  {
    slug: "evaluating-small-language-models",
    title: "How to Evaluate Small Language Models for Production",
    date: "2023-12-28",
    summary:
      "A comprehensive guide to evaluating SLMs, including metrics, test sets, and common pitfalls to avoid.",
    tags: ["guide", "evaluation"],
    content: `
# How to Evaluate Small Language Models for Production

Deploying a Small Language Model to production requires rigorous evaluation. Here's our framework for ensuring quality.

## Define Success Metrics

Before evaluating, define what "good" means for your use case:

- **Accuracy**: Does the model give correct answers?
- **Latency**: How fast are responses?
- **Consistency**: Are outputs stable across similar inputs?
- **Safety**: Does the model avoid harmful outputs?

## Build a Test Set

Your test set should represent real production traffic:

1. Sample from production logs
2. Include edge cases and failure modes
3. Cover all major use case categories
4. Update regularly as your product evolves

## Evaluation Methods

### Automated Metrics
- Exact match accuracy
- Semantic similarity scores
- Latency percentiles (p50, p95, p99)

### Human Evaluation
- Blind A/B testing against the teacher model
- Quality ratings on a defined rubric
- Error categorization

### Production Monitoring
- Shadow deployment comparisons
- Gradual rollout with monitoring
- Automatic rollback triggers

## Common Pitfalls

1. **Overfitting to the test set**: Regularly refresh your evaluation data
2. **Ignoring edge cases**: Specifically test failure modes
3. **Optimizing a single metric**: Balance accuracy, latency, and cost

## Lunar's Evaluation Suite

Lunar automates much of this evaluation process, providing comprehensive quality reports before deployment.
    `,
  },
  {
    slug: "self-hosting-slms",
    title: "Self-Hosting Small Language Models: A Complete Guide",
    date: "2023-12-20",
    summary:
      "Everything you need to know about deploying SLMs to your own infrastructure, from hardware requirements to serving frameworks.",
    tags: ["guide", "deployment"],
    content: `
# Self-Hosting Small Language Models: A Complete Guide

One of the key benefits of Small Language Models is the ability to run them on your own infrastructure. Here's how to do it effectively.

## Hardware Requirements

SLMs are designed to run on modest hardware:

| Model Size | Min GPU | Recommended |
|------------|---------|-------------|
| 1B params  | 4GB VRAM | 8GB VRAM |
| 3B params  | 8GB VRAM | 16GB VRAM |
| 7B params  | 16GB VRAM | 24GB VRAM |

For CPU-only deployment, expect 2-5x slower inference.

## Serving Frameworks

Several frameworks are available for serving LLMs:

### vLLM
Best for high-throughput serving with continuous batching.

### Text Generation Inference (TGI)
Production-ready with built-in optimizations.

### Ollama
Simple local deployment, great for development.

## Optimization Techniques

### Quantization
Reduce model precision from FP16 to INT8 or INT4 for 2-4x speedup.

### KV Cache Optimization
Reuse computed key-value pairs for faster generation.

### Speculative Decoding
Use a smaller draft model to speed up generation.

## Lunar Integration

Lunar exports models in formats compatible with all major serving frameworks. One-click export to GGUF, ONNX, or TensorRT.
    `,
  },
  {
    slug: "lunar-cli-v2",
    title: "Lunar CLI v2: Streamlined Workflows for SLM Development",
    date: "2023-12-15",
    summary:
      "Announcing Lunar CLI v2 with improved distillation workflows, better evaluation reports, and seamless deployment options.",
    tags: ["announcement", "cli"],
    content: `
# Lunar CLI v2: Streamlined Workflows for SLM Development

Today we're releasing Lunar CLI v2, a major update focused on developer experience and workflow improvements.

## What's New

### Simplified Distillation

The new \`lunar distill\` command handles the entire pipeline:

\`\`\`bash
lunar distill --project my-bot --target small
\`\`\`

This single command:
- Pulls your production traces
- Curates high-quality examples
- Trains the distilled model
- Runs comprehensive evaluation
- Deploys to your preferred target

### Interactive Evaluation

The new evaluation UI shows:
- Side-by-side comparisons with the teacher
- Accuracy metrics across categories
- Latency benchmarks
- Cost projections

### Multi-Target Deployment

Deploy to multiple targets simultaneously:

\`\`\`bash
lunar deploy --targets cloud,edge,local
\`\`\`

## Migration Guide

Upgrading from v1 is simple:

\`\`\`bash
pip install --upgrade lunar
lunar migrate
\`\`\`

The migrate command updates your configuration files automatically.

## What's Next

We're working on:
- Real-time trace streaming
- Collaborative project sharing
- Advanced fine-tuning options

Try v2 today and let us know what you think!
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
