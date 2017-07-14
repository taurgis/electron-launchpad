# How to contribute

First of all, thank you for taking the time to contribute to this project. We've tried to make a stable project and try to fix bugs and add new features continuously. You can help us do more.

Before you start, read the **README.md** file for info on the project and how to set it up.

## Getting started

### Check out the roadmap

In the **README.md** I have added some bullet points of funcionalities I have in mind adding to the Launchpad. If you have something completely different in mind thats also OK, but preferably create a ticket so that I know what you are up to. This prevents merging conflicts later on!

### Filing issues

Before starting work on a larger idea not discussed in an issue we recommend starting one to iron out your approach to implementation. PRs with conflicting ideas regarding architecture or other aspects of the project may be rejected. We appreciate any and all ideas you contribute providing they're discussed in a respectful and constructive manner.

Issues created that are not relevant to this project will be closed immediately - this is purely for efficiency as I don't have time to address and or move all of them to their correct place.

### Writing some code!

Contributing to a project on Github is pretty straight forward. If this is you're first time, these are the steps you should take.

- Fork this repo.

And that's it! Read the code available and change the part you don't like! You're change should not break the existing code and should pass the tests.

If you're adding a new functionality, start from the branch **master**. It would be a better practice to create a new branch and work in there.

When you're done, submit a pull request and I will check it out. I'll let you know if there are issues or changes that are needed before the pull request is accepted.

### Tests

We've written tests and you can run them to assure the stability of the code, just try running `npm test`. If you're adding a new functionality please include tests for it. If you have not written any tests for it your pull request will not be accepted.

### Documentation

Every chunk of code that may be hard to understand has some comments above it. If you write some new code or change some part of the existing code in a way that it would not be functional without changing it's usages, it needs to be documented.
