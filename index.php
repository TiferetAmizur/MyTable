<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Windows-1255" >
<link rel="stylesheet" href="styles.css"   >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="js.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<script var x="8"></script>

</head>
<body>

<!-- top navbar -->
<nav class="navbar navbar-inverse navbar-fixed-top" class="row" id="navbar">
  <div  style="display: flex">
  <!-- title -->
    <h1 class="title">My Table</h1>
    <!-- switch -->
    <label class="switch"> 
       <input type="checkbox" id="showtabel">
       <span class="slider round"></span>
    </label>
    <p class="navp">הצג טבלת נתונים</p>
 </div>
 <!-- light-blue div -->
  <div class="navdiv"></div>
</nav>

<div class="container">
<!-- table -->
<table id="mytabel" >
<thead>
<tr>
<th>מספר</th>
<th>מספר כופל</th>
</tr>
</thead>
<tbody>
     
</tbody>
</table>
</div>

</body>
</html>
