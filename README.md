
# Parfait

Parfait is a social, schedule sharing app which allows friends and family to view each other’s schedules to find available free space that suits the whole crew. 


## Authors

[@FionaWrigley](https://github.com/FionaWrigley)

  
## Roadmap

Short Term 0-3 months

-	Registration password validation fix 
-	Edit repeat events
-	Delete repeat events
-	Swipe to leave group feature
-	Change view option on group schedule 
        - Week
        - Fortnight
        - Month
        - 3 Months

Medium Term 6-12 months

-	Notifications – a user should be notified of invitation to     group and can choose to reject or accept
-	Accepted groups only - A member’s schedule should not be visible by group members until said member accepts the invitation to the group. Members should be able to see the group name and invited members prior to accepting the invitation
-	Blocking – a member should be able to block other members
-	Oauth – login via socials
-	Import calendars – import external calendars to availability
-	Group events

Long Term 12 months+

-	Reminders / alarms on events
-	Map integration and address look up on event location
-	Family sharing enabling viewing and booking of events in family member calendars
-	Ability to invite non-Parfait members to register via email and / or text
-	Message capacity – group / or individual level
## Environment Variables

To run this project, you will need to add the following environment variables to your next.config.js file

`parfaitServer` 


## Demo

https://parfait-coral.vercel.app/
  
  
## Tech Stack

**Client:** 
- NextJS 10.2.0
- React 17.0.2
- TailwindCSS 2.1.2

**Server:** 
- Node v12.19.0
- Express 4.17.1
- Apache 2.4.41
- MySQL 8.0.18


## Additional technologies
  
  - Font Awesome -
      Provides free icons for navigation
  - Date-fns -
      Used for date functions 
  - Next-optimized-images -
      Image optimisation
  - Next-PWA -
      No config service workers
  - Next themes -
      Used for dark mode    
  - React calendar -
      Calendar display
  - React-confirm-alert -
      Confirmation window
  - React hook form -
      Input forms  
  - React spinners -
      Pulse Loader spinner
  - React swipeable list -
      Swipe to delete events
## Features

- Progressive Web App
- Light/dark mode toggle
- Fullscreen mode
- Cross platform

  
## Run Locally

Before installing the Parfait, you will require the following services to be set up

Parfait database and API - please see the following repo for steps
https://github.com/FionaWrigley/ParfaitBackEnd/


## Getting Started on your local machine


Clone the project

```bash
  git clone https://github.com/FionaWrigley/ParfaitFrontEnd/
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Update next.config.js file

- Set environment parfaitServer to point at your local api


Start the server

```bash
  npm run dev
```

  