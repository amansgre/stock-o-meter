
# 1. Project name
  stock-o-meter

# 2. Project Description
  The is a simple stock monitoring program created as a small hands on
  project on the theme of MEAN Stack


# 3. Features:
  - Allows adding and maintaining ticker symbols through a drop down.
  - Allows deleting the ticker symbols from the list.
  - Provides an update of prices corresponding to added ticker symbols
    using a 3rd party API calls ("https://api.iextrading.com/1.0/tops/")


# 4. Installations required before running
  Proceed installing following

#Installing Node
  brew install node

#Install MongoDB
  brew install mongodb

#Installing Express
  npm install --save express
  npm install --save body-parser
#body-parser is used for express to read in JSON

#Installing mongoose(used as ORM for mapping angular models to MongoDB)
  npm install --save mongoose

#Installing gulp(to automate the build process)
  npm install --global gulp
  npm install --save gulp

# 5.How to run the project

  - Clone the repository https://github.com/amansgre/stock-o-meter
  - The file "package.json" contains all the info/list of all the artifacts project depends on.
  - By default project is designed to run on the localhost port 3000,so if you have already somethin
    running on this port , change the server in server.js in root directory.
  - Go to project directory and kick off the server using below command.

    gulp dev
