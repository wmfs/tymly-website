---
sidebar: auto
sidebarDepth: 2
---

# Guide

## What is Tymly?

**Tymly (pronounced "_timely_" :smiley:) is an open source [low-code software platform](https://www.cio.com/article/3263392/application-development/what-is-low-code-development-a-lego-like-approach-to-building-software.html).**

::: tip About Low Code platforms

In the world of Low Code, the forms, data-schemas and logic that coalesce to form a digital service are maintained using simple drag-and-drop tools.

With Low Code, subject-matter-experts throughout an organisation are empowered to envisage and continually improve their own digital services, without the need to procure ill-fitting software or write code.

Regardless of whether Tymly's particular flavour of Low Code appeals or not, the uptake of its _approach_ is becoming ever-more popular:

* [Low-Code in the Post Office](https://www.governmentcomputing.com/local-government/news/the-post-office-follows-local-councils-down-low-code-route)
* [Low-Code in Hackney Council](https://government.diginomica.com/2018/11/30/digital-success-through-low-code-at-hackney-council-focus-on-user-need/)
* [Low-Code in Adur and Worthing Councils](https://www.ukauthority.com/articles/a-low-code-platform-for-local-government/)

:::

**Why Tymly?**

Adhering to [government best practice](https://gdstechnology.blog.gov.uk/2018/11/05/11-barriers-to-coding-in-the-open-and-how-to-overcome-them/), Tymly is built in-the-open on [GitHub](https://github.com/wmfs), offered freely as open source software, embraces open standards, can be heavily customised and features an innovative "blueprint" mechanism to support collaborative endeavours.

**Tymly is built with :heart: at [West Midlands Fire Service](https://www.wmfs.net), contributions are very welcome!**

## Environment

::: tip Operating Systems
We've developed Tymly using technology and standards that are actively supported on the popular operating systems. Tymly is equally at home running on Windows, Linux or iOS.
:::


<img style="max-width:15rem" :src="$withBase('/nodejs-logo.png')" alt="foo">

### Node.js

**To run Tymly and try-out the examples in this guide, you'll need [Node.js](https://nodejs.org) installed on your system.**

* Installers for most Operating Systems can be found on the official Node.js [download page](https://nodejs.org/en/download/).
* Please ensure you have at least **Node.js** `V10.14.2` installed.

## Tymly CLI

Throughout this guide we'll use the **Tymly CLI tool** to quickly scaffold new components in a digital service and eventually spin-up a GraphQL API.
As such, Tymly CLI is a great fit for those comfortable sitting in front of command prompt.

::: tip About Tymly CLI
Please note Tymly CLI **isn't** the Low Code tooling intended for use by subject-matter-experts.
For that particular audience, one of Tymly's [GUI projects](https://github.com/wmfs) would probably be a better fit.
:::

**With [Node.js](#environment) available, install Tymly CLI by running the following command:**

``` bash
npm install @wmfs/tymly-cli -g
```

This will install the **Tymly CLI** package globally on your system, meaning you'll be able to use the `tymly` command from any directory.
To check you're good-to-go, try this:

``` bash
tymly --version
```

While we're still setting-up, let's set a few general config options. Run the following command and provide the requested info (it's all editable later via the `tymly set` command):

``` bash
tymly init
```

# Key Concepts

* In this section the main concepts that make Tymly are introduced alongside a running example. If you want to play along, you'll need to have [Tymly CLI](#tymly-cli) setup first.

## Blueprints

::: tip At a glance
In Tymly a ***blueprint*** is a collection of files that are mostly written in [JSON](https://www.w3schools.com/js/js_json_intro.asp) and adhere to relevant open standards.
When considered together, the files inside a blueprint should fully describe a digital service.
Blueprints cover all three facets of the [Model, View, Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern.
:::


**Let's make a new blueprint for a new *pizza-ordering* digital service. From inside a throwaway directory somewhere, run the following command:**

``` bash
tymly new blueprint
```

You'll be prompted for a few details regarding your new digital service. For the purposes of this example specify the **name** `tymly-pizza-blueprint`.

* **Boom!** :boom: You'll now have a new `/tymly-pizza-blueprint` directory, **change into there:**

``` bash
cd tymly-pizza-blueprint
```

__Here's a quick summary of the files that just got created for your new blueprint:__

`TODO: Screenshot this`

See the [Reference](/reference/) section for more detailed `blueprint.json` documentation.


## Models

**Stripping everything back, digital services are ultimately in the business of collecting, processing and disseminating data.**

In Tymly, zero-or-more **models** can be defined inside a [blueprint](#blueprints). Together these data model definitions form the "**M**" part of Tymly's Model View Controller architecture.

Each model should fully describe an entity that plays a role within its digital service.

**For Tymly Pizza, good candidates for models include:**

* `pizza`
* `order`
* `shop`
* `customer`

Tymly uses flexible schemas to define the expected "shape" of the data that each model represents.
This information is useful for several purposes including validation, frontend-scaffolding and data governance.

More specifically, in Tymly, a model's schema is expressed using a slightly extended version of the open [JSON Schema](http://json-schema.org/learn/getting-started-step-by-step.html) standard.

::: tip About databases
At this point it's perhaps worth noting that, thanks to its [plugin](#plugins) architecture, Tymly isn't prescriptive about the use of any particular database technology. A simple in-memory storage service is provided by default and an official PostgreSQL plugin is available when something more persistent becomes necessary.
:::

**We'll be needing some models for our Tymly Pizza digital service then. To keep this guide focused, we'll concentrate on just two models:**

| Model name | Description |
| ---------- | ----------- |
| `pizza`    | Will be used to define the details of pizzas available on the menu. |
| `order`    | For capturing all the things a customer wants to eat. |

**From within the `/tymly-pizza-template` directory, run the following commands:**

``` bash
tymly add model --name pizza
tymly add model --name order
```

Now we have a few more files to play with:

```
/tymly-pizza-blueprint
  /models
    pizza.json
    order.json
```

Although the scaffolded content of these files is ordinarily a great launchpad, we'll be wanting to replace them for the purposes of this guide.

**Edit `pizza.json`, and replace what's been generated with the following:**

``` json
{
  "title": "ofsted",
  "description": "",
  "primaryKey": [
    "urn"
  ],
  "type": "object",
  "properties": {
    "name": {
      "type": "integer",
      "maxLength": 14
    },
    "uprn": {
      "type": "string"
    },
    "establishmentName": {
      "type": "string"
    },
    "ofstedRating": {
      "type": "string"
    }
  }
}
```

This mostly standard JSON Schema stuff, with a few Tymly extensions.

### Seed data

As above, Tymly models are just a description of the data that can be expected to be thrown at it sometime later.
In certain circumstances it might be useful to "seed" a model with some default data.

* For example, Ordnance Survey's amazing [AddressBase products](https://www.ordnancesurvey.co.uk/business-and-government/products/addressbase-products.html) provide data relating to all properties, streets, land etc. throughout the UK. Within AddressBase, all these millions of entities need to be associated with a value from a [500-strong set of classifications](https://www.ordnancesurvey.co.uk/docs/product-schemas/addressbase-plus-premium-classification-codes.zip).

West Midlands Fire Service identified a need to use Ordnance Survey's gazetteer data as part of it's emergency mobilisation work, so set about configuring an [AddressBase Premium blueprint](https://github.com/wmfs/addressbase-premium-blueprint).
As can be seen [here](https://github.com/wmfs/addressbase-premium-blueprint/blob/master/seed-data/addressbase-classifications.json), seed-data was used to populate the [classification](https://github.com/wmfs/addressbase-premium-blueprint/blob/master/models/addressbase-classifications.json) model.

**Once seed data is applied then the model is free to be maintained as usual.**

* Though not particularly relevant for Tymly Pizza (bespoke pizzas would ordinarily be created by users using admin forms), for the purposes of illustration let's seed the `pizza` model with some usual suspects:

``` bash
tymly add seed-data --model pizza
```

A new file will be created:

```
tymly-pizza-blueprint
  /seed-data
    pizza-data.json
```

You'll see an empty array (inferred from the `pizza` model-schema) has been scaffolded. Let's replace the empty `data` JSON array in `/seed-data/pizza-data.json` so the file looks like:

`TODO: Provide demo pizza data`

## Card Templates

::: tip Introducing Card Templates
In Tymly, the layout and behaviour of any user interface, be it used for collecting or displaying data, is configured via a **Card template**. Card templates can be considered as the "view" part of Tymly's implementation of the MVC pattern.
:::

The following **Card Templates** might be considered good candidates for our Tymly Pizza blueprint:

* `customer-details-form`
* `order-form`
* `order-tracker-dashboard`
* `kitchen-dashboard`

The JSON-based [Cardscript](https://github.com/wmfs/cardscript) language (a sister project of Tymly) is used to write **Card Templates**.

As mentioned in its documentation, Cardscript is actually an extended implementation of the [Adaptive Cards](https://adaptivecards.io/explorer/) open standard that originated from Microsoft. As such, any content written for use in a vanilla Adaptive Cards client will be usable in Tymly.

::: tip About Adaptive Cards
It's worth stressing Adaptive Cards itself is a simple, extensible, **open** standard. As Cardscript and Tymly demonstrate, it's possible to work with the Adaptive Card vocabulary (and benefit from a modest ecosystem of tooling, linting and other resources) without installing any Microsoft technology whatsoever.
:::

The additional elements and features that Cardscript brings-to-the-party adhere to the [extensibility principles](https://docs.microsoft.com/en-us/adaptive-cards/resources/principles) as set-out in the Adaptive Card specification.

* **As an aside, those familiar with the [GDS Design System](https://design-system.service.gov.uk/) may also recognise a subset of Cardscript's additional elements (e.g. the [addresses pattern](https://design-system.service.gov.uk/patterns/addresses/)).**


`TODO: Put a list of Cardscript elements here`

Using the [open source SDK for Cardscript](https://github.com/wmfs/cardscript), those pizza examples can easily be rendered as web forms and dashboards inside a browser or PWA. Excitingly, there's nothing stopping those exact-same definitions from being used to generate a fancy voice interface either. For ultimate developer-stereotype-reinforcement, how about ordering pizza via a Cardscript-powered CLI application?

* This is another important benefit of Tymly's semantic approach. By placing an emphasis on describing a digital service via open standards (as opposed to locking away UI intent inside single-use code) new possibilities and freedoms present themselves.

**Enough talk!** :smiley:

Let's scaffold a simple admin form for creating and updating pizza info. Again, from within `/tymly-pizza-blueprint`:

``` bash
tymly add editable --model pizza
```

**Boom!** :boom: Now we've a few more files, amongst them is:

```
tymly-pizza-blueprint
  /card-templates
    pizza-editing-form.json
```

**What just happened there, then?**

A file containing a description of a form (expressed in Cardscript) has been generated for *editing* pizza data.
All the auto-configured elements have been inferred from the JSON Schema associated with the `pizza` model.

**Now things get very cool...**

* Copy the entire content of the `pizza-editing-form.json` file and paste it into the online [Cardscript playpen](https://wmfs.github.io/cardscript/).
* That's a lot of form, for not much effort then, isn't it?

And of course, because of all the open standards flying around, try pasting the exact same JSON into Microsoft's [Adaptive Cards Designer](https://acdesignerbeta.azurewebsites.net/) too.

While we're at it, let's conjure the beginnings of an order form for our customers to order pizza with:

``` bash
tymly add creatable --model order
```

A new `order-creation-form.json` file will appear, try it out in those two online playpens.

* You'll note this form will need a little more TLC before it can be put in front of hungry customers - but it's nothing too arduous.

## State Machines

**The "Controller" part of Tymly's MVC implementation is achieved by configuring Finite State Machines via a slightly extended version of [Amazon States Language (ASL)](https://states-language.net/spec.html).**

::: tip About Amazon States Language
Before going any-much further, it's perhaps worth stressing Amazon States Language is a simple JSON-based **open** standard that's totally usable without going anywhere near an Amazon subscription.
:::

### State Types

Thanks to [Statebox](https://github.com/wmfs/statebox) (a sister-project of Tymly), the following [state types](https://states-language.net/spec.html#states-fields) are supported from the ASL specification:

* [Task state](https://states-language.net/spec.html#task-state)
* [Choice state](https://states-language.net/spec.html#choice-state)
* [Parallel state](https://states-language.net/spec.html#parallel-state)
* [Wait state](https://states-language.net/spec.html#wait-state)
* [Succeed State](https://states-language.net/spec.html#succeed-state)
* [Fail State](https://states-language.net/spec.html#fail-state)

Simply by configuring and chaining a set of states built from this small palette of types, ASL is capable of describing complex workflows. Business analysts with a background in [BPEL](https://en.wikipedia.org/wiki/Business_Process_Execution_Language), [BPM](https://en.wikipedia.org/wiki/Business_process_management) or similar will hopefully feel right-at-home defining business processes via ASL-based tooling.

* This mash-up of Finite State Machines, ASL and Tymly's [plugin](#plugins) mechanism has proven to be incredibly powerful in practice. Some parallels can be drawn between Tymly's loosely-coupled FSM approach and a [microservices](https://en.wikipedia.org/wiki/Microservices) architecture.

### State Resources

Finite State Machines exist to orchestrate a set of actions in a predictable and controlled manner.
In ASL, each `Task` state defined inside a State Machine configures an action to be undertaken at a specific point during a process.

::: tip Note
Tymly and the ASL specification diverge slightly when it comes to the implementation of the `Task` state.
:::

Instead of configuring a `Task` state to invoke a remote resource somewhere on Amazon's infrastructure, Tymly (via Statebox) wires `Task` states to local async functions. In Tymly, these functions are known as **State Resources**.

**Fun fact**: Amazon Professional Services actually use little ol' Statebox and the State Resource modification themselves, they say:

> Organizations may be reluctant to adopt services like AWS Step Functions due to cost, complexity or current limitations.
> **Statebox** provides a compelling alternative for those wishing to leverage the Amazon State Language and do so in a lightweight manner that can be embedded within Lambda functions.
> It's great to have options like this for organizations with varying requirements and use cases.

Here are a few examples to help get a feel for what state resources are about:

`TODO: Use that showcase widget`

* Please see the [Reference](/reference/) section for a full list of the official state resources currently available for Tymly.

**For our Tymly Pizza blueprint to actually do anything we'll need some State Machines then:**

* One to manage the process of creating or updating the details of a pizza
* And a second to handle the pizza-ordering process

You'll recall in a previous steps, we ran the following commands:

``` bash
// No need to run these again!
tymly add editable --model pizza
tymly add creatable --model order
```

We know already that these commands produced some [Card Template](#card-templates) files, but they also scaffolded State Machines to embed the UI within a wider data-collection process too:

```
/tymly-pizza-blueprint
  /state-machines
    edit-pizza.json
    create-order.json
```

The content of `create-order.json` is reproduced below:

`TODO: Reproduce create-order.json`

Here we can see a state machine has been conjured in ASL for handling the process of collecting orders from a user, via a form.

* Let's also make the menu of pizzas publicly queryable so that apps can present a list the details of different pizzas to prospective customers:

``` bash
tymly add queryable --model pizza --roles $everyone
```

Another state machine will appear:

```
tymly-pizza-blueprint
  /state-machines
    query-pizza.json
```

## Services

::: tip You might want to skip this section!
Tymly Services are a hidden, internal mechanism designed to help [State Resources](#state-resources) scale better and be more performant. Understanding services is useful to gain a more rounded understanding of plugins (covered in a later section) but this section can be safely [skipped](#access-control) if you prefer.
:::

In practice, [State Resources](#state-resources) often need to share common functionality and state. To help illustrate the use-case for Tymly services, consider the following fictitious (but realistic) scenario.

As part of a new digital service, a need has been identified for several processes to interact with an aging legacy database. This technology is rare, and no Tymly plugin is available for it.

A developer (not a subject-matter-expert on this occasion) then quickly develops four new [State Resources](#state-resources) which are duly added to Tymly's rosta via a [plugin](#plugins):

* `insertRowIntoLegacyTable`
* `updateRowInLegacyTable`
* `deleteRowFromLegacyDatabase`
* `queryLegacyDatabase`

With these State Resources available, state machines (via [Task](https://states-language.net/spec.html#task-state) states) are now free to perform basic operations on the legacy database.

Nice one developer :thumbsup:, things can be handed back to the subject-matter-experts again? Not quite.

**What if establishing a new connection to this beat-up database takes 30 seconds?**

In a blasé implementation, each time one of our new `Task` resources is invoked it would first need to establish a new database connection, perform the necessary database operation and then close the connection before advancing to the next state.

Apart from the obvious performance horror, this approach clearly doesn't scale well at all. With any number of State Machines running simultaneously, the load on our fragile database would soon become intolerable.

A better implementation would be to instantiate a small pool of connections to our database when Tymly first starts. Each of our four new State Resources could then grab a pre-instantiated connection from this shared pool (via a common pool API) as-and-when necessary.

**This is where Tymly Services come into play.**

**Services** in Tymly are nothing more than an exposed class in a [Plugin](#plugins) (therefore establishing state through its constructor and an API through its methods).

Tymly will create a new instance of all registered service classes at boot time. Each service class can provide an optional asynchronous `boot()` method (e.g. to establish a connection pool or grab an authentication token for use with a SaaS solution). The use of some simple metadata helps ensure services are initialized in a logical order.

* **A full list of official Tymly services is available in the [Reference](/reference/) section.**

## Access control

### Roles

**Digital services will typically involve the interactions of many people. The need to interact with a digital service can differ from person-to-person, depending on the role they are assuming at the time.**

A couple of **roles** immediately spring-to-mind for the ongoing Tymly Pizza example:

* `customer`
* `manager`

Customers wouldn't expect to be able to edit the price of a pizza, nor would someone dispensing managerial duties be ordering pizza on-the-clock.

*"But managers are people too, why can't they eat nice things?"*

* They can, a single person (or more specifically a single _user_) can be _granted_ both the `customer` and `manager` roles at the same time.

**All of this leads us to the very important, yet very dry, world of [Role Based Access Control (RBAC)](https://en.wikipedia.org/wiki/Role-based_access_control).**

* Handling RBAC robustly is an essential ability of any Low Code platform worth consideration.
Reassuringly, Tymly's RBAC implementation is no-nonsense and is applied right down at the [State Machine](#state-machines) level.
* Regardless of whatever API technology is being used (REST and GraphQL plugins are available for  BTW), Tymly will only ever allow a user to start, update or cancel a State Machine if RBAC is OK with it.

### Dynamic Roles

Aside from explicit roles such as `customer` and `manager`, Tymly offers several ***dynamic*** roles whose membership is derived at runtime when a request to interact with a State Machine is received.

| Dynamic Role     | Description |
| ------------     | ----------- |
| `$everyone`      | The entire world is automatically part of the `$everyone` role, regardless if they have a Tymly account or come brandishing an authentication token or not. This role is useful for interacting with public things like bus service status dashboards. |
| `$authenticated` | Any user making an authenticated request (i.e. a user attempts to interact with a State Machine with a valid Tymly authentication token) is automatically granted membership of the `$authenticated` role. An example use-case for this dynamic role could be to implement organisation-wide initiatives such as a digital suggestion-box scheme. |
| `$owner`         | In some scenarios, the user who originally instigated an event should be the only person allowed perform any subsequent actions related to it. For example, after a user creates a blog post via a State Machine, then the ability to edit or delete it later may be welcome (even career-saving). But at the same time, allowing absolutely anyone permission to edit or delete any post would descend into chaos. It's in situations such as this where the `$owner` role can help, allowing permissions to be defined for the originator only. Note that a normal, fixed role such as `blog-moderator` (for wielding the power to delete any blog post) could be defined alongside the configuration of `$owner`. |

### Role Inheritance

**As above, many users can be *granted* membership to a particular *role*, and many roles can be bestowed upon a single *user*.**

To help reduce User Management complexity and bring some modularity to proceedings, Tymly supports roles being added to the membership of other roles. :nerd_face:

Revisiting the ongoing blueprint example, a one-size-fits-all manager role for a household-name like *Tymly Pizza* won't be suitable in practice.

**Let's break the manager role into more specific roles:**

* `national-manager`
* `regional-manager`
* `menu-administrator`
* `restaurant-manager`
* `shift-manager`

This refactor brings immediate benefits. Now the business of setting-up a new pizza can be more tightly restricted to anyone with a membership of the `menu-administrator` role (as opposed to a broad-brush "any manager" as it was before).

While we're at it, a `restaurant-manager` is always entitled to do anything a `shift-manager` can do (for example look at at a Kitchen Dashboard) along with some added financial responsibilities.
To reduce ongoing User Management burden, the `shift-manager` role can simply be granted membership of the `restaurant-manager` role.

* Through Role Inheritance, any manager of a Tymly Pizza restaurant instantly has access to the same functionality any Shift Manager enjoys.
* Similarly, the `national-manager` role could be granted membership to the `menu-administrator` role. Again, through Role Inheritance, this arrangement would result in any regional manager being bestowed full control over the menu, alongside any administrators which have been trusted with direct user membership.

### Role templates

**As part of the User Research work that leads to the configuration of a Tymly Blueprint, many roles (and the scope of their interaction) within a digital service will be captured.**

Such considered analysis is often gold-dust, and certainly worth holding onto and making the most of.

This is where Tymly **Role Templates** come into play. A blueprint can ship with a selection of pre-canned roles that any organisation would be likely to use.

::: tip About Role Templates
Please note Tymly offers total control over how users, roles, memberships and permissions are structured and can be adapted at any time. Role Templates serve as a convenience to automatically configure typical roles that can be embraced, modified or just ignored as an organisation sees fit.
:::

To keep things simple in this guide, let's ignore all that good refactoring above, and just add a couple of really basic **Role Templates** to our Tymly Pizza blueprint:

``` bash
tymly add role-template --name manager
tymly add role-template --name customer
```

**Which gives us a couple of new files:**

```
/tymly-pizza-blueprint
  /role-templates
    manager.json
    customer.json
```

By default, you'll see these files are configured to allow precisely nothing.
Permission to perform any _action_, on any _State Machine_ needs to be explicitly introduced.
Replace the content of `customer.json` with the following JSON:

`TODO: Write some JSON`

Here we're saying that any user of Tymly who is _granted_ membership to the `customer` role has the ability to start a brand new `order-creation` State Machine. Note that a customer has no permission to update or cancel an already-running `order-creation` State Machine (or any other State Machine, for that matter).

And replace `manager.json` with this JSON too:

`TODO: Write more JSON`

### Plugins

**Tymly Plugins can be considered as a simple package of related [State Resources](#state-resources) and [Services](#services).
At boot-time, Tymly will load zero-or-more plugins from a specified file path.**

In this way Tymly can be tailored to only import the exact capabilities necessary to deliver the blueprints it will encounter.
As such, plugins help Tymly avoid unnecessary bloat and keep runtime footprints to an absolute minimum.

**Here are a few of the official Tymly plugins that are available:**

<v-plugin-cards></v-plugin-cards>

* No endorsement should be inferred from any of these vendors, BTW. :wink:

**Tymly's plugin mechanism is simple yet powerful stuff:**

* Plugins allow for a decoupling of Tymly from any external technology.
A [PostgreSQL plugin](https://github.com/wmfs/tymly-pg-plugin) provides a [set of State Resources](https://github.com/wmfs/tymly-pg-plugin/tree/master/lib/components/state-resources) and [Services](https://github.com/wmfs/tymly-pg-plugin/tree/master/lib/components/services) for persisting data.
Alternatively, a [MongoDB](https://www.mongodb.com/) plugin _could_ be developed and used instead, if that's more your thing.
* Plugins allow organisations to continually experiment with different technologies and service providers without compromising the entire platform.
* Plugins also allow for any [State Resource](#state-resources) or [Service](#services) to be adapted if necessary.
This is possible because plugins are loaded in a predictable order.
If a State Resource with the name `sendEmail` is defined in the first plugin to load, and it also appears in the last... the latter implementation will be taken through to the boot phase (i.e. the earlier implementation is _overridden_)..

* The ability to target and override pretty-much any piece of functionality makes Tymly reassuringly malleable. Internally, Tymly features a core plugin to undertake low-level duties such as caching and logging. Even those state resources and services can be overridden if you ever feel the need to dive that deep!


### API

**For most use cases, an API will be required to remotely start, update and stop Tymly State Machines.
Frontend Tymly apps then hook onto to that API, bringing user interaction to the party.**

Two official plugins exist for the purposes of spinning-up a Tymly API:

`TODO: Use the showcase component to show Express and GraphQL plugins`

For the purposes of this guide, we'll roll with [GraphQL](https://graphql.org/).

**Run this command from within the `/tymly-pizza-blueprint` directory:**

``` bash
tymly dev --graphql --blueprint-path "." --port 4000
```

#### GraphQL playground

You can now explore the various GraphQL schemas the plugin has configured from a browser, via the in-built playground app:

[http://localhost:4000/graphql](http://localhost:4000/graphql)

`TODO: So. Much. More.`
