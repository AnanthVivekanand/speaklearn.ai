# speaklearn.ai

Made for the [GPT-4 hackathon](https://twitter.com/AviSchiffmann/status/1637144863396466688). 

Let's say you're learning a language -- you want to practice against a native speaker. A native speaker can be hard to find, but with GPT-4, OpenAI Whisper, and prompt engineering, you can make an intellient system to help you speak and learn. 

## Social good

Being able to practice is crucial to learning a language, which is perhaps one of the best ways to understand a foreign culture. In today's multicultural society, people attempt to learn languages, but apps like Duolingo are deterministic and don't allow you to discover what you don't know. They don't have features for open-ended conversation.

speaklearn allows users to immerse themselves in a language and the culture that comes with it. I hope this project helps some students/users learn a language and delve into it.


## Inspiration

I'm learning Japanese at Georgia Tech, but it's hard to find people to practice with. I realized that ChatGPT is actually decent at Japanese and I can tell it what I want to learn... and we can leverage the power of AI for helping students learn.

## What it does

It allows students to talk in a foreign language, auto picks it up, feeds it to GPT-4, takes the output, reads it outloud in a realistic voice from Google Cloud. You can speak and hear naturally, as if you were in a conversation irl.

## How we built it

It's built using Next.js and Tailwind, the GPT-4 api, and Google Cloud for audio transcription and voice synthesis. The UI is built off of the famous simple-chatbot-ui project on Github.

## Challenges we ran into

Turns out that Whisper actually has a bug on the audio formats it can accept for transcription, and it's suspected by forum users to be because of an outdated ffmpeg install on the OpenAI servers. Rather than figuring out transcoding in the browser (which seems like a total pain,) I figured out Google Cloud and hooked it up instead.

## Accomplishments that we're proud of

Having multi-language support and auto-detecting the language that a user is speaking in. This makes it easy to jump in and get started, and reduces a student engagement bottleneck.

## What we learned

Stand on the shoulders of giants! This is my first hackathon, and I've realized that you can get very far by collaborating with other groups and other released projects. For example, the simple-chatbot-ui provided a lot of the sample code for this project's user interface. I also collaborated with another group (shoutout to Briar Smith, Clay Smith, Joshua Levy,  and Malinda Coler) that was working on a similar, speech-based chatbot. We diverged in our approaches but it was helpful brainstorming with other talented engineers and hackers :)

## What's next for speaklearn.ai

Buy the domain and deploy it, start a small test by asking my fellow Japanese students at GT to try it and give me feedback. I imagine that speaklearn could be very useful for users like middle school and high school foreign language teachers who don't touch duolingo with a 10 foot stick. It could be an interesting idea to reach out to them. We'll see where it goes from there :)
