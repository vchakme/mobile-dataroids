# Import from json file
mongoimport -d database_name -c collection_name outfile.json

# Import from csv file
# --headerline: Using the first row of data as the column name of the Collection.
mongoimport -d database_name -c collection_name --type csv --file locations.csv --headerline

# Export to csv file
# In the case csv file, you must provide the list of columns Collection (Required).
# List of columns separated by commas and no spaces.
# Must declare what type of output file (--csv)
 
mongoexport -d database_name -c collection_name -f column_1,column_2,column_3 --csv -o outfile.csv

# Export to json file
mongoexport -d databaseName -c collectionName -o outputLocation.json
mongoexport --db=databaseName --collection=collectionName --out=outputLocation.json
