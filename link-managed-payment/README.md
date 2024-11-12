# React Native Sample App - Link Managed Payment

This is a sample React Native app that demonstrates how to integrate with Link to accept open banking payments. This 
particular example is for the Link Managed Payment configuration, where both account linking and payment take place 
within a Link session - without the need for separate additional API calls to Link after the Session ends. 

This example app is for demonstration purposes only. For the actual integration, an application server is recommended
for API calls and authorization with the Link platform.

## Setup

Ensure that both your Android and iOS development environments have been setup and that you can run the 
emulator/simulator for either platform.

See https://reactnative.dev/docs/set-up-your-environment for information on the dependencies required for setting up 
your environment for IOS and Android development.

Before attempting to build and run the app, the app-properties.tsx file needs to be populated with the merchant ID, 
client ID, and client secret that you received when onboarded to the Link sandbox environment.

## Deployment

### Step 1: Install Dependencies

First, you need to run ```yarn install``` from the link-managed-payment directory to install the dependencies.

### Step 2: Starting Metro

Next, you will need to start **Metro**. For this, open a terminal window, navigate to the link-managed-payment 
directory, and run the following command:

```bash
yarn start
```

### Step 3: (IOS Only) Install Pods

From the link-managed-payment directory, run ```yarn pods``` to install the pods required for the IOS build.

### Step 4: Build and Deploy the App

From the link-managed-payment directory, run the following command to build the app and deploy it to the simulator:

For Android:

```bash
yarn android
```

For IOS:

```bash
yarn ios
```

If everything is set up correctly, you should see the app running in the simulator or device discovered during the 
deployment process.