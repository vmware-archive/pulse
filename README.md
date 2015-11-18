[![Build Status](https://travis-ci.org/pivotal/pulse.svg)](https://travis-ci.org/pivotal/pulse) [code climate] [![Join the chat at https://gitter.im/pivotal/new-project-monitor](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pivotal/new-project-monitor?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Deployment](#deployment)
4. [Contribute](#contribute)

## Description

ProjectMonitor is a CI aggregator to help teams monitor the status of their builds.
The project consists of 3 primary components:
* Pulse CI Build API [postman](ci.pivotallabs.com)
* [Pulse Management Tool](frontend/README.md)
* Pulse Monitor Display [demo](ci.pivotallabs.com)

![](https://d1fto35gcfffzn.cloudfront.net/images/labs/tools/project_monitor.png)

The intent of pulse is to display the status of multiple Continuous Integration builds on a single web page.
Displaying the status of all your projects' builds on a big screen monitor or TV provides a highly visible/glanceable resource
for the development team to triage any issues!

Pulse currently supports:
* WIP - we're doing a refactor!

Roadmap for integration
* Travis-CI

List of potential integrations:
* CircleCI
* Codeship
* Concourse
* Cruise Control
* Jenkins
* Semaphore
* Solano CI (formerly loved as tddium)
* TeamCity

We use Pulse internally at Pivotal Labs to display the status of the builds for all our client projects.
We also have an instance of Pulse running at [ci.pivotallabs.com](ci.pivotallabs.com) that we use for displaying the status of the builds
of various open source projects - both of projects Pivotal Labs maintains (such as Jasmine)
and of non-Pivotal projects (such as Rails).

## Installation

This project uses React and Redux for its frontend component and SpringBoot for its backend api server.

The installation instructions for the frontend can be found [here](https://github.com/pivotal/pulse/blob/master/frontend/README.md)  
The installation instructions for the backend can be found [here](https://github.com/pivotal/pulse/blob/master/backend/README.md)  

The integration tests are written using Capybara and are located [here](https://github.com/pivotal/pulse/tree/master/integration_tests)  

Each README in their respective folders contains information about running each piece manually, alternatively you may use the
`run.sh` script in the [ci](https://github.com/pivotal/pulse/blob/master/ci/run.sh) directory to run the tests and start 
the frontend and backend processes.


## Deployment

## Contribute

Pulse is using Pivotal Tracker to manage development of the project.  Ideas for new features are stored in the icebox.
Feel free to peruse the stories and tackle one yourself! [Pulse Tracker Project](https://www.pivotaltracker.com/projects/1456574)

Copyright (c) 2013 Pivotal Labs. This software is licensed under the MIT License.
