# UFOs


## **Overview**
The goal is to consume a data file of UFO sightings and use JavaScript and HTML to build a user interface. 
The resulting webpage provides general information about UFO sightings and then via table selection enables the user to access the UFO sighting data based on one or more of the following parameters: 
date, city, state, country and/or shape. 
 
### **Results**: 

* **Instructions-Filtering Data**

There are five categories the user can enter into in order to filter the table of UFO sightings. 
You may choose to enter any one or all five fields in order to drill into the information of interest:
 
1) Enter a Date. 
	Format d/m/yyyy 
       (example 1/1/2010)

2) Enter a City
	Format lowercase 
       (example el cajon)

3) Enter a State
	Format lowercase, 2 character 
       (examples: az)

4) Enter a Country
	Format lowercase, 2 character 
       (example: us)

5) Enter a Shape
	Format lowercase 
       (example: triangle)

* **Sample-Filtering Data**

Sample below includes a user that entered 3 of 5 fields:

**Before**
![Exhibit A](https://github.com/ljlodl5/UFOs/blob/main/Selections%20Return%20to%20Default.png)

**After** 
![Exhibit B](https://github.com/ljlodl5/UFOs/blob/main/Table%20Selections%20Chosen.png)


### **Summary**

* **Drawbacks**

One major drawback of the website is that it does not contain grouped dropdowns for the user to select based on available table data. 
Entering text and hoping the return provides something other than a blank table is poor design.
Plus, while the 'on change' update appears like a nice feature (it does not require the user to select a button) it still requires the user to make a change on the page before the table is adjusted to the selection(s).
A button has the same impact and may be less confusing to the user. 

* **Improvements**
1) The site in not aesthetically pleasing. With some CSS improvements such as additional color and backdrop, and pictures can make the site something a user may want to return to.
2) One improvement I added to the webpage was to create a 'refresh' button so the user did not need to go back to the browser to refresh the selections (see snapshot)

![Exhibit C](https://github.com/ljlodl5/UFOs/blob/main/Refresh%20Page.png)
   
![Exhibit D](https://github.com/ljlodl5/UFOs/blob/main/Selections%20Return%20to%20Default.png)
   

#### UFO Challenge located in GitHub
(https://github.com/ljlodl5/UFOs)