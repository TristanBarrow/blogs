---
title: Separation of Concerns
date: 11-27-2023
image: separation.jpeg
description: Response to "Separation of Concerns is a Lie"
---

This is a response to Theo's video "Separation of Concerns is a Lie" found here:
https://www.youtube.com/watch?v=eMTFzpxR0QQ.

# Introduction

The video linked to by Theo, challenges “conventional” wisdom surrounding
Separation of Concerns and he actually argues against it. I’d like to add my
voice to this discussion and hopefully broaden the definition of Separation of
Concerns and discuss why it can be an invaluable tool in your coding arsenal.

## How do I define Separation of Concerns?

I see separation of concerns as a very loose principle. “Concerns” can be
anything. It could be logging, features, styling, views, platforms (iOS, web,
Android), or logic. Each project we have will have its own definition of what
qualifies as a “concern” requiring separation. The key is knowing when to
separate your concerns and when to cross your concerns. In Theo’s 2 line
example, I would still argue that he has separated concerns because the data
fetching functionality is in one method and the view is in another. The fact
that they are in the same file has nothing to do with whether or not these
concerns are separated.

The key takeaway here is that separation of concerns is about effective
organization not some predefined frameworks opinions.

## MVC as a Flexible Philosophy

Now, let’s shift our focus to the Model-View-Controller (MVC) architectural
pattern. Theo is discussing this pretty much as prescribed by Angular. I think
this does the concept a bit of a dis-service. Instead of viewing MVC as a rigid
framework, I see it as a flexible philosophy that can adapt to your specific
needs and context.

Something else to consider before I get into my definition. If you ask both a C#
backend developer and an Angular developer what a “Controller” is you will get
vastly different definitions. Now imagine them trying to have a conversation
about controllers without pre-defining what they are talking about… this crap
gives me a headache.

Each concern should answer a question.

-   Model answers "What is it?"
-   View answers "What does it look like?"
-   Controller answers "What does it do?"

For example:

In the context of a frontend React SPA, MVC might be applied as follows:

-   Model: Fetch requests responsible for fetching data from an API or server
-   View: JSX
-   Controller: Logic required to ensure that the View displays correctly

I think these three things should be separated. If you are calling fetch, sort
and React.createElement (through jsx syntax) all within the same function in
production, you may consider splitting up your code a little. That’s not to
say they can’t be in the same file. Just break things up a little so they are
easier to think through.

Say you are working on an API that has no physical UI for the user to click on.
MVC may apply differently but it still might apply:

-   Model: SQL database
-   View: REST API Response as JSON (“Controller” if you are a C# developer… that’s not confusing… thanks Microsoft)
-   Controller: Tasks like sorting or filtering before sending down the data in your presentation layer

In both examples, the core MVC principles remain intact, (data / processing /
presentation) even though the specific implementation details differ
significantly. The true strength of MVC lies understanding the concepts of data,
processing and presentation and applying them to your use case.

## Conclusion

I believe taking a broad perspective on MVC and Separation of Concerns will help
you improve maintainability. All in all it is a fantastic thing to think about
as you are programming as long as you don’t get too stuck into one framework’s
definitions.
