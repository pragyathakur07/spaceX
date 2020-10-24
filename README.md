This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3006](http://localhost:3006) to view it in the browser.

## About Project
This project will help users list and browse all launches by SpaceX program. As per the requirement, this app is server-side rendered with webpack and babel. I have used all the API's mentioned in the requirements.
The user can see all the launch programs as per individual filters for launch year, launch success, land success, combination of any two or combination of all three.
After applying filters, the url will change and page will be updated with latest records without refreshing. 
If the page is refreshed with the applied filters in the URL – the resulting page is server side rendered & filters are again client side rendered.
I have added an additional button for 'Reset Filters'. If the user has applied all the filters and it wants to go back to initial data, then they can use 'Reset Filter' button for updating the page with initial records.

### Deployment

GitHub repo: https://github.com/pragyathakur07/spaceX

Heroku link: https://spacexreactapp.herokuapp.com/
