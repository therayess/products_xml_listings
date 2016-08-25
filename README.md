Setup
---
1. install dependencies: npm install
1.1 UPDATE: there seems to be a problem with the default npm registry and hence packages are not getting installed, if that happens please use this commmand instead: npm install --registry http://registry.npmjs.org/
2. compile and build: npm run build
3. start development server: npm start
4. open http://localhost:3000/ in your browser and the app should work



Overview
---
For building this app i went with reactjs as opposed to the recommended angularjs and symfony because honestly i've not had much experience working with those, recently i've been focusing on reactjs more and more as i find it fun to work with, i like the idea of organizing all the front end code into robust components.

So to start with i set up the app entry component (clientapp.jsx), the layout as a common components placeholder (like header, footer, etc..) and the landing page component where i set the productsform as the landing page. Inside productsform i handle the main data loading (the xml file) and for this i provided 2 methods, one is to use file upload and the second is by entering the url as described in the assignment brief, the reason i provided file upload is because loading the data through url will not work due to CORS limitations, the app needs to be hosted on the same domain as the document being retrieved, so for my development purposes it won't work, hence, i added the file upload where you can select .xml files and it will do the same job, i kept the url form to show how it can be done if the app is hosted on the same domain, but i disabled the text field, if you submit the form i load a local .xml file (the one given from the url provided in the assignment brief).

After handling the fetching of data i pass it to productslistings which processes the data to create an array of objects from the xml data which i need to format and render the product components, i pass this array to the productitem component which structures the html for the products. In this component i also call the filters component which adds a sort and keywords search filters.

I did not add tests because honestly i've not had the chance to work with those yet but i'm working on learning all about them and i'd love to work with them and learn from you guys.

I kept the styling to a simple minimum for this app, i made it responsive to an extent too, my time was spent more on setting up the components and their actions.



ToDo
---
1. Tests
2. I can add a details page that could be accessed from the listings view, i can use the <additional> fields data from the xml feed to add content to this details page



Summary
---
To get the xml data you can:
1- Use the file upload way
2- Hit the submit button next to the url field form to load a local .xml file and show listings
