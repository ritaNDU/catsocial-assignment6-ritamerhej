# Cutie Kat
## Profiling Session 
Profiling data is stored in a file called: profiling-data.04-10-2024.13-59-33.json

Upload it to react-devtools's profiler to check the profiling session.
## Testing Accounts 
### emails: 
Rita.merhej@hotmail.com Roy.merhej@hotmail.com Bisse.merhej@hotmail.com
Chupa.merhej@hotmail.com
### Password for all accounts:
1234567890

### Links
Rita:
cutiekat://profile/1

Roy:
cutiekat://profile/2

Bisse:
cutiekat://profile/3

Chupa:
cutiekat://profile/4


## Description

Cutie Kat is a social media app for kids to share their favorite pets pictures. Kids can upload their cat's (or dog's, eventhough they're not welcome between felines...) cutest pictures, follow their friends and have them see their cutie cat's cuteness. Kids can also write random cat quotes, without pictures. When they add no picture, our mascot "Bisse the Cat" will be showing in their new Meow.

## Definition
A Meow: it's a post in regular Social Media jargon.

## How to run the code

1. Clone the repository using the following command:
   `git clone https://github.com/ritaNDU/catsocial-assignment6-ritamerhej.git`
2. Inside the cloned repository run either of the following commands:
   `yarn` or `npm install`
3. To start the server, run either of these commands:
   `yarn start` or `npm run start`

## How I Got Organized

I drew a plan for my app on pen and paper. I then figured out how the data should flow in the app, and what data was needed and what was its architecture. Then, I started implementing each feature one by one.

## Challenges Faced

### Design

I have no taste in design. It was really hard to figure out what design looked good, especially for a kids app and I don't think I got it perfectly right. At the end, after some googling and after checkimg out some designs, I came up with a design that kids might like.

### Authentication

The token was not being loaded properly on app start. At the end I figured out that the issue was with the useEffect.

### Posts and Users fetching

As sorting and filtering was not handled by the api as I needed it, I had a rough time fetching posts and users and adding pagination. At the end, I added a big limit for posts to be able to fetch all posts while keeping pagination functional. I wanted to create my own api with flask, but I ran out of time. 
There's still a bug. If you create a new user, and that new user creates a post, and that post is the 16th (limit + 1), it won't show on the user's profile. I couldn't find a way to fix this while keeping pagination.

### Notification Problem

I had a bug with the notification feature. Whenever I sent a notification at a specific time, it would send it infinitely many times. After some googling I was able to solve the issue.

## Folder Structure

The code is all located in the src/ folder.

### The src/ folder:

It is divided into:

### The assets/ folder:

It's where all icons and illustrations in general are stored.

### The components/ folder:

It is divided into:

1. **atoms/** which is where the smallest pieces of components like buttons are implemented.
2. **molecules/** which is where the atoms are used to create the structures that need to be used in the interface, like card components for example that specify how a single card should be rendered.
3. **organisms/** is where molecules are used to create features for the app. For example, there's the PersonCards List component.

### The hooks/ folder:

This is where all custom hooks are stored.

### The screens/ folder:

This is where all screens are stored.

### The store/ folder:

This is where the redux storeis implemented.

### The styles/ folder:

This is where the theme is stored.

### The data/ folder:

It contains data, and interfaces to structure data objects.

### The navigation/ folder:

This is where navigation is implemented. react-navigation is being used for navigation.

### The utils/ folder:

This is where some utility functions are implemented.

### The service/ folder:

All api functions are implemented here.

## Attribution

Cat icons created by [Smashicons - Flaticon](https://www.flaticon.com/free-icons/cat)

Veterinary icons created by [Freepik - Flaticon](https://www.flaticon.com/free-icons/veterinary)

Image by [starline on Freepik](https://www.freepik.com/free-vector/cute-colorful-kitten-pow-pattern-design_2709577.htm#query=cat%20paw&position=14&from_view=keyword&track=ais&uuid=ef8ea998-e278-4216-a8d4-42509e875746)

Image by [starline on Freepik](https://www.freepik.com/free-vector/colorful-paw-feet-print-background-track-wildlife-safari-vector_79642642.htm#query=cat%20paw&position=5&from_view=keyword&track=ais&uuid=4fb1fc22-5c9c-48a0-bc66-eab54c0e94e8)
