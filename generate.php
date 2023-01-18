<hr>

<h1> Generate Question Paper </h1>

<hr>

<?php

    if (isset($_POST['generate'])) {

        echo "Generate a question paper";

        echo "<br><br>";

    } else {

        // redirect user to differnet page

    }

    echo "Random Number Generator";

    echo "<br>";
    echo "<br>";

    echo rand(1, 100);

    echo "<br>";

    echo mt_rand(1, 100);

    echo "<br>";

    echo mt_rand(1, 100);

    echo "<br><br>";

    echo "Fetch tables with specified substring in name";

    include './includes/dbh.inc.php';

    // SHOW TABLES FROM repository LIKE 'FWM%';

    echo "SHOW TABLES FROM repository LIKE 'FWM%'";

    echo "<br><br>";

    $check = "SHOW TABLES FROM repository LIKE 'math1_1_1x1_10_fwm_%'";

    echo "\$numberoftableswithspecificsubstringcharacters = mysqli_query(\$conn,\$check);";

    echo "<br><br>";

    $numberoftableswithspecificsubstringcharacters = mysqli_query($conn,$check);

    $type = gettype($numberoftableswithspecificsubstringcharacters);

    echo $type;

    echo "<br><br>";

    echo "print_r(\$numberoftableswithspecificsubstringcharacters)";

    echo "<br><br>";

    print_r($numberoftableswithspecificsubstringcharacters);

    echo "<br><br>";

    echo "var_dump(\$numberoftableswithspecificsubstringcharacters)";

    echo "<br><br>";

    var_dump($numberoftableswithspecificsubstringcharacters);

    echo "<br><br>";

    echo "Cast Object to Array:";

    echo "<br><br>";

    echo "\$array =  (array) \$numberoftableswithspecificsubstringcharacters";

    function object_to_array($data) {

        if (is_array($data) || is_object($data)) {

            $result = [];

            foreach ($data as $key => $value) {
                
                $result[$key] = (is_array($value) || is_object($value)) ? object_to_array($value) : $value;

            }
            
            return $result;

        }

        return $data;

    }

    $array = object_to_array($numberoftableswithspecificsubstringcharacters);

    echo "<br><br>";

    print_r($array);

    echo "<br><br>";

    var_dump($array);

    echo "<br><br>";

    echo "\$type_check = get_type(\$array);";

    echo "<br><br>";

    $type_check = gettype($array);

    echo "<br><br>";

    echo "\$typecheck = " . $type_check;

    echo "<br><br>";

    $number_of_tables_found = count($array);

    echo "Number of Tables Found: \$number_of_tables_found = count(\$array)";

    echo "<br><br>";

    echo "Number of Tables Found: " . $number_of_tables_found;

    echo "<br><br>";

    mysqli_close($conn);

    echo "

        <code> <br>
        &nbsp; include './includes/dbh.inc.php'; <br> <br>
            
        &nbsp; \$sql = SELECT * FROM repository; <br> <br>

            &nbsp; if (\$result=mysqli_query(\$conn,\$sql)) { <br>

                &nbsp; &nbsp; \$rowcount=mysqli_num_rows(\$result); <br>
                &nbsp; &nbsp; echo The total number of rows are: . \$rowcount; <br>

            &nbsp; }

            <br>
            <br>

            &nbsp; / Manually Insert a Row into Repository Table <br>

            <br>
            

            &nbsp; \$sql = INSERT INTO question_1 (ID, Image_Path, Question_Numbers, Marks, Comment) <br> <br>
            &nbsp; VALUES ('path', 'path', 'path', 'path', 'path'); <br> <br>

            &nbsp; if (mysqli_query(\$conn, \$sql)) { <br>

                &nbsp; &nbsp; echo New record created successfully; <br>

                &nbsp; } else { <br>

                &nbsp; &nbsp; echo Error:  . \$sql . msqli_error(\$conn); <br>

            &nbsp; } <br> <br>

            &nbsp; mysqli_close(\$conn); <br>
            
        &nbsp; </code>

    ";

    echo "<br>";
    echo "<br>";

    
    $command = escapeshellcmd('python test.py');
    $output = shell_exec($command);
    echo $output;

?>