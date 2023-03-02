# CoursWebMobile

## Setup

### Create Nx Workspace

Run `npx create-nx-workspace@latest`

And then:

- Select `Standalone Angular app`
- Chose application name
- Select `SASS(.scss)` as the default stylesheet format
- Select `No` when asked if you want to enable distributed caching

### Add PWA capabilities

Run `npm install @angular/pwa`
Run `npx nx g @angular/pwa:pwa`

### Setup Firebase

- Create account on https://firebase.google.com
- Go to Firebase console https://console.firebase.google.com/u/0/
- Add project
    - Select a name
    - You can enable or disable analytics
    - Click on `Create project`
- Add Firebase to the web application:
    1. Choose a name for the app (and setup Firebase Hosting)
    2. Run `npm install firebase`
    3. Run `npm install -g firebase-tools`
    4. Run `firebase login`
    5. Run `npm install @angular/fire`
    6. Create file `src/environments/environment.ts` with this content
        ```typescript
         export const environment = {};
       ```
    7. Run `nx g @angular/fire:ng-add` and select the following services:

    - `ng deploy -- hosting`
    - `Authentication`
    - `Firestore`
    - `Cloud Storage`

    8. Pick the previously created Firebase project

### Cleanup

Remove `NxWelcomeComponent` from declarations in `app.module.ts`

Remove `<cours-web-mobile-nx-welcome></cours-web-mobile-nx-welcome>` from `app.component.html`

Delete `src/app/nx-welcome.component.ts`

## Migrate to standalone Angular app

Replace `main.ts` content with:

```typescript
bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: !isDevMode(),
                registrationStrategy: 'registerWhenStable:30000',
            })
        ),
        importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
        importProvidersFrom(provideAuth(() => getAuth())),
        importProvidersFrom(provideFirestore(() => getFirestore())),
        importProvidersFrom(provideStorage(() => getStorage())),
    ],
}).catch((err) => console.error(err));
```

- Cleanup unused imports

- Delete `app.module.ts`

  

