# Cinema Project by using Cybersoft Academy API
 
## By using API from Cybersoft, customer will have detail of film and be able to book seat when they want to go cinema
 
## Technical used in project
    - react-redux: used to call hook like useSelector and useDispatch:
        -useSelector: to update everytime that reducer is change also get value to render website
        -useDispatch: to dispatch action into reducer
    - antd and tailwindcss : used for styling
    - Axios: used to call API from Cybersoft to get value
    - formik: used to get value from form
    - history: used to push page or go back to page before
    - moment: used to transform date text value to form like dd/mm/yyyy
    - react-router-dom(v5): used to implement dynamic routing in a website. By using create template, I can make the code lessly and reusable
    - redux thunk:
        1.used to get value from API back-end whenever the component dispatch action,
        2.then I create variable result to get data from services,
        3.then I dispatch it to reducer, then I update state in reducer,
        4.In component I used useSelector to get value from reducer to render it into website
    - hook useEffect: used to call action every time the page load
 
## How I setup it
    1. used create-react-app to create react app
    2. create folder like page, components, redux, services, templates, util
        page: contain detail page of it
        components: contain component that can reuse
        redux: to store value also call API
        services: contain type of API & url, make process of dispatch become easier
        util: contain import file
    3. import all the technical used above
    4. setup store for redux and using react-router-dom(v5) to setup app.js & index.js
    5. create all page of website with ant and tailwindcss for styling with example value
    6. using redux-thunk & axios &  react-redux & useEffect to get value from back-end
        -used useEffect to call action in redux-thunk everytime website load,
        -then I create variable result to get data from services through Axios & services,
        -then I dispatch variable result to reducer,
        -then I using variable result to update state in reducer,
        -In component | page I used useSelector to get value from reducer to render it into website
    7. deploy website by using surge
    8. push it into github"# khoacinema"
 

