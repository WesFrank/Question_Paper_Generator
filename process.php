<?php

    $uid = "FWM"; // String

    echo "<hr>";

    echo "<h3> Database Stuff Happens Here: </h3>";

    echo "<hr>";

    if (isset($_POST['submit'])) {

        // Handle Image/File Data Separately; Spare the array data for database entry as well as file locating and storage, referring onyl to the image by file path and associating it with a certain question id.
        
        if ($_FILES["file"]["name"] != "") {

            echo "<h4> Image/File Data: </h4>";

            $file = $_FILES["file"];
            
            print_r($file);

            echo "<br>";
            echo "<br>";
            
            $fileName = $_FILES["file"]["name"];
            
            print_r("File Name: " . $fileName);

            echo "<br>";
            echo "<br>";

            $fileType = $_FILES["file"]["type"];
    
            print_r("File Type: " . $fileType);

            echo "<br>";
            echo "<br>";
            
            $fileTmpName = $_FILES["file"]["tmp_name"];
            
            print_r("Temporary File Location: " . $fileTmpName);

            echo "<br>";
            echo "<br>";
    
            $fileError = $_FILES["file"]["error"];
    
            print_r("File Error : " . $fileError);

            echo "<br>";
            echo "<br>";
    
            $fileSize = $_FILES["file"]["size"];
    
            print_r("File Size: " . $fileSize);

            echo "<br>";
            echo "<br>";

            // Write code to relocate file to permanent folder and generate a new file path stored in a variable for later use

            $fileExt = explode('.', $fileName);
            $fileActualExt = strtolower(end($fileExt));

            $allowed = array('jpg', 'jpeg', 'png', 'svg');

            // Nested if statements, which tests if a file satisfies specific criteria and then goes to place it in the correct location, within the server's memory, SQL DATABASE!

            if (in_array($fileActualExt, $allowed)) {

                if ($fileError === 0) {
                    
                    // Check if file Size is less than 500 Mb

                    if ($fileSize < 500000000) {

                        $fileNameNew = uniqid('', true).".".$fileActualExt;

                        echo $fileNameNew;

                        echo "<br>";
                        echo "<br>";

                        $fileDestination = 'uploads/'.$fileNameNew;

                        echo "<br>";
                        echo "<br>";
                        
                        echo $fileDestination;

                        // Move file from temporary location to "uploads" folder

                        move_uploaded_file($fileTmpName, $fileDestination);
                        
                    } else {

                        header("location: http://localhost/QuestionPaperGenerator?file=size_limit");

                    }

                } else {

                    header("location: http://localhost/QuestionPaperGenerator?file=upload_error");

                }

            } else {

                header("location: http://localhost/QuestionPaperGenerator?file=format_not_allowed");

                exit();

            };
    
            echo "<br>";
            echo "<br>";
            echo "<hr>";

        } else {

            // Do nothing

        }

        echo "<h4> Question Meta Content: </h4>";

        // Grab below variables from form submission in index.php only once

        $context = $_POST['context'];        

        // Grab below Hidden Variables from form submission in index.php only once
        
        $sub = $_POST['sub'];
        $num = $_POST['num'];        
        $cnt = $_POST['cnt'];
        $pnt = $_POST['pnt'];
        $tpk = $_POST['tpk'];
        $grd = $_POST['grd'];
        $dur = $_POST['dur'];

        echo "Subject: " . $sub;
        echo "<br>";
        echo "<br>";
        echo "The Question Number is: " . $num;
        echo "<br>";
        echo "<br>";
        echo "The Number of Subquestions is: " . $cnt;
        echo "<br>";
        echo "<br>";
        echo "The Total Points: " . $pnt;
        echo "<br>";
        echo "<br>";
        echo "Topic: " . $tpk;
        echo "<br>";
        echo "<br>";
        echo "Grade: " . $grd;
        echo "<br>";
        echo "<br>";
        echo "Duration: " . $dur;
        echo "<br>";
        echo "<br>";
        echo "<hr>";

        $uniqid = uniqid();

        echo "Unique ID: " . $uniqid;

        echo "<br>";
        echo "<br>";

        $literal = $sub.'_'.$uniqid;

        echo $literal;

        echo "<br>";
        echo "<br>";

        include './includes/dbh.inc.php';

        // Code to retrieve number of tables with a certain substring

        $check = "select 1 from table like `.$literal.`";

        $exists = mysqli_query($conn, $check);

        if ($exists !== FALSE) {

            echo("This table exists");

        } else {

            echo("This table doesn't exist");

            $sql_create = "CREATE TABLE IF NOT EXISTS " . $literal . " (
                ID int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
                User varchar(255),
                Grade varchar(255),
                Subject varchar(255),
                Number INT(5),
                Subnumber INT(5),
                Level varchar(255),
                Mark INT(3),
                Total_Points INT(5),
                Context varchar(255),
                Topic varchar(255),
                Image_Path varchar(255),
                Phrase varchar(255),
                Answer varchar(255)
            )";

            mysqli_query($conn, $sql_create);

            mysqli_close($conn);

            echo "<br>";
            echo "<br>";

            echo "Table Created";

            echo "<br>";
            echo "<br>";
            
        }

        // Grab all Variables from form submission in index.php using a for/while loop

        for ($i = 1; $i <= $cnt; $i++) {

            include './includes/dbh.inc.php';

            echo "i = " . $i;
            
            echo "<br>";
            echo "<br>";

            $qnumPart0 = "qnum";
            $qnumPart1 = $num;
            $qnumPart2 = "_";
            $qnumPart3 = $i;
            ${$qnumPart0 . $qnumPart1 . $qnumPart2 . $qnumPart3} = $_POST[ $qnumPart0 . $qnumPart1 . $qnumPart2 . $qnumPart3 ];
            $qnum = ${$qnumPart0 . $qnumPart1 . $qnumPart2 . $qnumPart3};

            echo "Subquestion Number: " . $qnum;

            echo "<br>";
            echo "<br>";

            $qPart0 = "q";
            $qPart1 = $num;
            $qPart2 = "_";
            $qPart3 = $i;
            ${$qPart0 . $qPart1 . $qPart2 . $qPart3} = $_POST[ $qPart0 . $qPart1 . $qPart2 . $qPart3 ];
            $question = ${$qPart0 . $qPart1 . $qPart2 . $qPart3};
            
            echo "Question Phrase: " . $question;

            echo "<br>";
            echo "<br>";

            $sPart0 = "s";
            $sPart1 = $num;
            $sPart2 = "_";
            $sPart3 = $i;
            ${$sPart0 . $sPart1 . $sPart2 . $sPart3} = $_POST[ $sPart0 . $sPart1 . $sPart2 . $sPart3 ];
            $answer = ${$sPart0 . $sPart1 . $sPart2 . $sPart3};

            echo "Correct Answer: " . $answer;            

            echo "<br>";
            echo "<br>";

            $lPart0 = "l";
            $lPart1 = $num;
            $lPart2 = "_";
            $lPart3 = $i;
            ${$lPart0 . $lPart1 . $lPart2 . $lPart3} = $_POST[ $lPart0 . $lPart1 . $lPart2 . $lPart3 ];
            $level = ${$lPart0 . $lPart1 . $lPart2 . $lPart3};
            
            echo "Taxonomy Level: " . $level;

            echo "<br>";
            echo "<br>";

            $mPart0 = "m";
            $mPart1 = $num;
            $mPart2 = "_";
            $mPart3 = $i;
            ${$mPart0 . $mPart1 . $mPart2 . $mPart3} = $_POST[ $mPart0 . $mPart1 . $mPart2 . $mPart3 ];
            $mark = ${$mPart0 . $mPart1 . $mPart2 . $mPart3};

            echo "Allocated Mark: " . $mark;

            // Build table with very specific name in database called "repository";

            // Put the question data into the table created above by running an sql query

            if ($_FILES['file']['name'] != "") {

                $sql_insert =
                
                "
                
                    INSERT into `$literal` (`User`, `Grade`, `Subject`, `Number`, `Subnumber`, `Level`, `Mark`, `Total_Points`, `Context`, `Topic`, `Image_Path`, `Phrase`, `Answer`)
                    VALUES ('$uid', '$grd', '$sub', '$num', '$i', '$level', '$mark', '$pnt', '$context', '$tpk', '$fileDestination', '$question', '$answer')
                    
                ";
                
            } else {

                $filePath = 'No_Image_Uploaded_for_Context'; // This is only set to a static string temporarily until changes are made later

                $sql_insert =
                
                "
                
                    INSERT into `$literal` (`User`, `Grade`, `Subject`, `Number`, `Subnumber`, `Level`, `Mark`, `Total_Points`, `Context`, `Topic`, `Image_Path`, `Phrase`, `Answer`)
                    VALUES ('$uid', '$grd', '$sub', '$num', '$i', '$level', '$mark', '$pnt', '$context', '$tpk', '$filePath', '$question', '$answer')
                    
                ";

            }            
    
            mysqli_query($conn, $sql_insert);
            
            mysqli_close($conn);

            echo "<br>";
            echo "<br>";

            echo "Data Captured";

            // Prevent the same data to be stored in a new table upon refreshing the page, instead redirect user to index.php page

            ?>

                <script>
                    if ( window.history.replaceState ) {
                        window.history.replaceState( null, null, "http://localhost/QuestionPaperGenerator/" );
                    }
                </script>

            <?php

            echo "<hr>";

        }

    } else {

        // Redirect User to Differnet Page

    }

?>