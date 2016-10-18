/*
--------------------------------------------------------------------------------------------
Active / Inactive Indicator Plugin v0.7.0, Mario Enrico Ragucci, mario.ragucci@sailpoint.com
--------------------------------------------------------------------------------------------
This snippet scans the identity.jsf page for the any field text configured in the replacement map
and replaces its value. Also The value field will be emptied and replaced with a new "Active / Inactive" indicator: 
- "true" will be accompanied by a red dot next to it
- "false" or empty will be accompanied by a green dot next to it
*/

/* Configuration starts here
----------------------------------------------------------------------------------------------
Add an entry for each attribute you want to be changed.
Entries are looked up by their name. In Example, if you want to replace the display value of 
the attribute "Inactive", the namehas to be "Inactive" as well.
Each entry needs to have a settings attribute, consisting of the following attributes:
	- setNewName: true if you want to rename the Column (in example, setting "Inactive" to "Active")
	- newName: the value to set the column to (in example, setting "Inactive" to "Active")
	- invertBoolean: useful if you want to invert the boolean logic (in example, if "Inactive == true",
	  but column gets renamed to "Active", then show "Active == false" instead of "Active == true")
*/
var mapping = [
  { /*en*/
    name: "Inactive",
    settings: {
		setNewName: true,
		newName: "Active",
		invertBoolean: true
    }
  },
  { /*de*/
    name: "Inaktiv",
    settings: {
		setNewName: true,
		newName: "Aktiv",
		invertBoolean: true
    }
  },
  { /*es*/
    name: "Inactivo",
    settings: {
		setNewName: true,
		newName: "Activa",
		invertBoolean: true
    }
  },
  { /*fr*/
    name: "Inactif",
    settings: {
		setNewName: true,
		newName: "Actif",
		invertBoolean: true
    }
  },
  { /*it*/
    name: "Inattive",
    settings: {
		setNewName: true,
		newName: "Attivo",
		invertBoolean: true
    }
  },
  { /*nl*/
    name: "Inactief",
    settings: {
		setNewName: true,
		newName: "Actief",
		invertBoolean: true
    }
  },
  { /*pt_BR*/
    name: "Inativo",
    settings: {
		setNewName: true,
		newName: "Ativo",
		invertBoolean: true
    }
  }
];
/* Configuration ends here
*/
/* A helper method for really old browsers
*/
if (!Array.prototype.filter)
{
   Array.prototype.filter = function(fun /*, thisp*/)
   {
      var len = this.length;
      if (typeof fun != "function")
      throw new TypeError();

      var res = new Array();
      var thisp = arguments[1];
      for (var i = 0; i < len; i++)
      {
         if (i in this)
         {
            var val = this[i]; // in case fun mutates this
            if (fun.call(thisp, val, i, this))
            res.push(val);
         }
      }
      return res;
   };
}
/* Some static variables
*/
var RED_DOT_CLASSNAME 		= "riskIndicator ri_ff0000";
var GREEN_DOT_CLASSNAME 	= "riskIndicator ri_00ff00";
 
jQuery(document).ready(function(){
	/* get ALL the table record from the table with class .spTable, found in div #attributesContentContainer 
	*/
	jQuery("#attributesContentContainer .spTable tr").each(function(){
		var current = $(this);
		/* Check if this is an eligible record. It must have more than 3 childNodes 
		*/
		if(current.childNodes.length > 3) {
			var columnKey = current.childNodes[1].innerText;
			/* Check if text of the first column equals an entry in our replacement map
			*/
			var searchArray = mapping.filter(function(obj) {
				return (obj.name == columnKey);
			});
			if(searchArray.length > 0) {
				/* Get the configuration object
				*/
				var configuration = searchArray[0];
				
				/* Get the value of the second column
				*/
				var columnValue = (current.childNodes[3].innerText.toLowerCase() === "true") ? true : false;
				/* Check configuration object to see whether or not we have to invert
				*/
				var invertBoolean = configuration.settings.invertBoolean;
				
				/* Assume value is false
				Set the classname of the childnode to the one responsible for showing
				a red dot. This is the one used for representing high risk scores
				*/
				current.childNodes[3].className = RED_DOT_CLASSNAME;
				
				/* If value is value, but we shall invert it, do so
				*/
				if(invertBoolean) {
					/* Set the classname of the childnode to the one responsible for showing
					a green dot. This is the one used for representing low risk scores
					*/
					current.childNodes[3].className = GREEN_DOT_CLASSNAME;
				}
				
				/* Check the actual value of the column
				*/
				if(columnValue) {
					/* Set the classname of the childnode to the one responsible for showing
					a green dot. This is the one used for representing low risk scores
					*/
					current.childNodes[3].className = GREEN_DOT_CLASSNAME;
					
					if(invertBoolean) {
						/* Set the classname of the childnode to the one responsible for showing
						a red dot. This is the one used for representing high risk scores
						*/
						current.childNodes[3].className = RED_DOT_CLASSNAME;
					}
				}
				
				/* Removing any value of the second column
				*/
				current.childNodes[3].innerText = "";
				
				/* Finally checking whether or not to rename the Key column
				*/
				var renameColumn = configuration.settings.setNewName;
				if(renameColumn) {
					current.childNodes[1].innerText = configuration.settings.newName;
				}
			}
		}
	});
});