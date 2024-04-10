# Cutie Kat

## Description

Cutie Kat is a social media app for cats. You can upload your cat's cutest pictures, follow your friends and have them see your cutie cat's cuteness.
Whenever you add a new post, make sure to refresh the feed on your profile to see it.

## How to run the code

1. Clone the repository using the following command:
   `git clone https://github.com/ritaNDU/catsocial-assignment6-ritamerhej.git`
2. Inside the cloned repository run either of the following commands:
   `yarn` or `npm install`
3. To start the server, run either of these commands:
   `yarn start` or `npm run start`

## How I Got Organized

I drew a plan for my app on pen and paper. I then figured out hoe the data should flow in the app, and what data was needed and what was its architecture. Then, I started implementing each feature one by one.

## Challenges Faced

### Design

I have no taste in design. It was really hard to figure out what design looked good, and I don't think I got it perfectly right.

## Autentication

The token was not being loaded properly on app start. At the end I figured out that the issue was with the useEffect.

## Posts and Users fetching

As sorting and filtering was not handled by the api as I needed it, I had a rough time fetching posts and users and adding pagination. At the end, I added a big limit to be able to fetch all users. There's still a bug. If you create a new user, and that new user creates a post, and that post is the 16th, it won't show on the user's profile. I coouldn't find a way to fix this.

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
