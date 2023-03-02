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
Run `npm install --save @angular/pwa`
Run `npx nx g @angular/pwa:pwa`

### Setup Firebase

