# Suraj's Portfolio Site

## Hello `A heartly welcome by Suraj`

The contact section is working on a gs (Google Script):
Google Script code below

```
var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
    }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
    }

  finally {
    lock.releaseLock()
  }
}
```

Steps to use the #Google Script :
    Step 1: Create a Google Sheet  
    Step 2: Create 3 coloums naming: [Name	Email	Message]  
    Step 3: Open Extensions from Menu bar  -> App Script  
    Step 4: Create a new Script  
    Step 5: Paste the Code from above  
    Step 6: Do a new deployment  
    Step 7: Allow permissions  
    Step 8: Embeed the URL in your code .js file or <script>  
