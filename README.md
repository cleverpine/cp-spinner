# Lht Spinner Loading Service

Lht Spinner Loading Service is a service that loads default LHT spinner component on demand.

## Library Dependencies

Before using the Lht Spinner Loading Service, make sure you have the following dependencies installed in your project:

- **@angular/core**: Version 15.0.0 or higher
- **@angular/common**: Version 15.0.0 or higher
- **@angular/cdk**: Version 15.0.0 or higher

Make sure to include these dependencies in your project's package.json file

**WARNING:** <br/>
For Angular Version **16** or lower -> use 0.0.11 version of the LHT spinner
<br>
For Angular Version **17** or higher -> use the latest version of the LHT spinner

# Getting started with Lht Spinner Loading Service

This guide explains how to set up your project to use the Lht Spinner Loading Service. It covers prerequisites, installation steps, and configuration details.

## Prerequisites

Ensure you have the latest version of npm installed in your project. The Lht Spinner Loading Service is available through npm.

## Installation

Install the Lht Spinner Loading Service using the npm command:

        npm install cp-lht-spinner

> This command adds the project dependencies to your package.json file.

## Usage

To use the Lht Spinner Loading Service, follow these steps:

### 1. **Add the Lht Spinner module to your module and provide configs if needed**

There are no required parameters, if you want to add none just provide <b>empty object</b>.
<br/><br/>
Add the following to your @NgModule imports:

```js
.....imports

import { LhtSpinnerModule } from 'cp-lht-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LhtSpinnerModule.forRoot({
      spinnerDelayTime: 300, // optional
      spinnerSize: 100, // optional
      spinnerLoadingText: 'Custom text', // optional
    }),
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
```

The configuration model is defined as follows:

```ts
export interface LhtSpinnerLibConfig {
  readonly spinnerDelayTime?: number;
  // Use this if you want to add delay before loading the spinner, im milliseconds

  readonly spinnerSize?: number;
  // Use this if you want to make the spinner smaller or larger

  readonly spinnerLoadingText?: string;
  // Use this if you want to change the text below the spinner
}
```

Different way to set the spinnerLoadingText (it is useful if you need to use translations):

The .show() method of the service accept 1 optional string argument.

```ts
// Example 1:
this.loadingService.show('Add here the loading spinner text you want to show');
--------------------------------------------------------------------------------------
// Example 2:
this.loadingService.show(this.translationService?.instant('common.spinnerLoadingText'));
```

---

### 2. Add the Lht Spinner service module to your interceptor or whatever you want to use it

```js
//Example usage

...other improts

import { LhtLoadingService } from 'cp-lht-spinner';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LhtLoadingService,
    ...other constructor parameters
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();

      //...your current logic

    return next.handle(req).pipe(
      tap({
      //...your current logic
      }),
      catchError((err: HttpErrorResponse) => {
        //...your current logic
      }),
      finalize(() => this.loadingService.hide()),
    );
  }
}

```

## 3. Test your application

You can test your application using Angular's built-in server:

> ng serve
