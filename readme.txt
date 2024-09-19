Instructions on how to set up and run the application:
Backend Setup (Django):

-Navigate to the backend directory then run cd backend
-Install the required Python packages from requirements.txt by running the command pip install -r requirements.txt
-Run Django set up the database by running the command python manage.py migrate
- Start the Django development server by running the command python manage.py runserver
- Access the API at http://localhost:8000/api 
Backend API Endpoints:

Line Chart Data: http://localhost:8000/api/line-chart-data/
Bar Chart Data: http://localhost:8000/api/bar-chart-data/
Pie Chart Data: http://localhost:8000/api/pie-chart-data/
Candlestick Chart Data: http://localhost:8000/api/candlestick-data/

Frontend Setup (Next.js):

-Navigate to the frontend directory then run cd frontend
-Install the necessary dependencies by running npm install
-Start the development server by running npm run dev
-Go to http://localhost:3000 in the browser
 Running Both Frontend and Backend Together:
-To run Run the Django backend server run the command python manage.py runserver and for Next.js frontend server the command  npm run dev
and visit http://localhost:3000

Library and tools used :
-Next.js
-React 
-Redux Toolkit 
-Chart.js 
-Tailwind CSS 
-Django 
-Django REST Framework 
-Python 
-Axios 

Brief explanation of the approach and thought process:
-Frontend:

The front-end of the application is built using Next.js with React for creating dynamic and interactive user interfaces.
The main goal for the front-end was to create a clean and intuitive dashboard that renders charts dynamically. For this, Chart.js was used to display the Line, Bar, and Pie charts.
Redux Toolkit was used for state management to handle the data flow between the front-end and back-end. It allows us to manage the state more efficiently and avoid prop drilling or excessive use of local state.
The front-end fetches data from the back-end API using Axios to ensure smooth data retrieval and rendering on the charts.
-Backend:

The back-end is developed using Django and Django REST Framework, which provide the necessary API endpoints to serve the chart data in JSON format.
APIs were created for the Line Chart, Bar Chart, Pie Chart, and Candlestick Chart data. These APIs serve hardcoded data to simplify the project for now.
While no database was required for this assignment, Django has built-in support for databases (like PostgreSQL), which can be used in future expansions to store and serve dynamic data.
-Data Flow:

The front-end sends requests to the Django API when the dashboard loads, fetching the required data for each chart.
Once the data is fetched, it's passed to the respective chart components (Line, Bar, Pie) and rendered dynamically using Chart.js.


