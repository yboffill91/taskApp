<?php
include './db-connect.php';
$data = $_POST['search'];
if (!empty($data)){
  $query = "SELECT * FROM tasks WHERE name LIKE '$data%' ";
  $result = mysqli_query($connection,$query);
  if(!$result){
    die('Query Error'.mysqli_error($connection));
  }
  $json = array();
  while($row = mysqli_fetch_array($result)){
    $json[]=array(
      'name' => $row['name'],
      'id' => $row['id'],
      'description' => $row['description']
    );
    $json_string = json_encode($json);
    echo $json_string;
  }
}

?>