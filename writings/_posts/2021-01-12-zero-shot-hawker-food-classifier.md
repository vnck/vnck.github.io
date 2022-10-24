---
layout: post
title: "How to build a hawker food classifier without training data"
date: 2021-01-12
tags: [AI]
description: "And why you should not sleep on zero-shot models."
permalink: /writings/zero-shot-hawker-food-classifier
---

Starting a data science project almost always involves two components:

1. Having a question that needs answering.
2. Having the data needed to find that answer.

The catch is that data is not always readily available (also called data scarcity) and to have to do your own data collection is a laborious process, which is an easy kill-switch for any enthusiasm to start on a data science project. 

That's where most will turn to pre-trained models, completely removing the need to assign time and computational resources to train a model from scratch. Most machine learning packages these days make provide a set of readily available pre-trained models through a [model zoo](http://pytorch.org/serve/model_zoo.html).

If you are familiar with pre-trained models, you will know that what commonly follows is fine-tuning, the process of optimising the model for your specific task at hand, which still demands some amount of data. The problem of data scarcity hasn't gone away.

Here's an exciting news though, models with zero-shot capabilities are creating a whole new ball game of projects that are no longer limited by data scarcity.

<details>
	<summary>
        <h4>What is zero-shot?</h4>
    </summary>
	<p><b>Zero-shot</b> refers the capability of machine learning models to perform unseen tasks, in other words, to do things the model was not explicitly trained to do. A model's zero-shot capability is therefore also related to a model's robustness and ability to generalise.</p>
</details>

#### OpenAI's CLIP

In January, OpenAI released [CLIP](https://openai.com/blog/clip/), an image classification model displaying remarkable "zero-shot" capabilities. Since OpenAI had made the model [public](https://github.com/openai/CLIP), I wanted to join in the fun of  experimenting with it, and so decided I would use it to build a hawker food classifier.

Experimenting with CLIP's capability to classify Singaporean hawker food had several motivations:

- Singapore's hawker culture had just been given [UNESCO status](https://www.reuters.com/article/us-singapore-food-unesco-idUSKBN28R097).
- Food classification is a relatively beginner level machine learning project and there are already many resources on how to build one, allowing for some level of comparison.
- I wanted to see how CLIP would perform on non-English words, based on the assumption that CLIP was predominantly trained on English words.

#### Process

As far as I know, there is no dataset of hawker foods in Singapore. Instead, I simply grabbed some photos of hawker food from my friend, Jason, who runs a food review instagram account ([@jasoneatfoodd](https://www.instagram.com/jasoneatfoodd/)) and also provided a list of hawker names as labels for CLIP to assign:

```python

labels = ['White Chicken Rice', 'Roasted Chicken Rice','Laksa','Hokkien Mee',

'Nasi Lemak','Prata','Ban Mian','Black Carrot Cake','White Carrot Cake',

'Lor Mee', 'Chicken Chop','Kway Chap', 'Maggi Goreng',

'Kaya Toast','Sambal Stingray']

```

I then ran these images through a simple prediction pipeline with the CLIP model, using the [starter code](https://colab.research.google.com/github/openai/clip/blob/master/notebooks/Interacting_with_CLIP.ipynb) provided as reference. The whole process of setting up the code and preparing a set of test images took no more than thirty minutes, which was honestly impressive.

#### Results

Well, it turns out that CLIP was able to perform pretty well!

<figure>
    <img src="../assets/posts/2021-05-27-zero-shot-hawker-food-classifier/clip-hawker.png"/>
    <figcaption>CLIP predictions on hawker food</figcaption>
</figure>

Most of the images were correctly labelled such as *chicken chop*, *sambal stingray* and even *ice kachang*. It was even able to correctly label certain food items that had no english words in them at all, such as *prata*, *nasi briyani* and also *wanton mee*.

However, we can also see CLIP does struggle with some of the non-English dishes such as *hor fun* and *bah kuh teh*. However, this could also be because of visual similarity between these soupy dishes.

#### What now?

Certainly, more experiments can be done to tease out CLIP's nuances. Will it be able to recognise the [difference between white and roasted chicken rice](https://blog.usejournal.com/i-made-a-machine-learning-chicken-rice-classifier-in-4-hours-to-tell-me-what-type-of-chicken-rice-e9b1af4aa069)? What if we replaced the non-English names with their westernised version, *bah kuh teh* to *pork bone soup*? 

Zero-shot models such as CLIP and [GPT-3](https://openai.com/blog/gpt-3-apps/) are changing the game of building machine learning solutions by bypassing the barrier of data scarcity. For people who are just starting out learning data science, and for people who simply want to experiment, this is great and exciting news.
