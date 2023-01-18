<!DOCTYPE html>

<html>

    <head>

    <title> Question Paper Generator </title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    </head>

    <body>
        
        <section id="loginpage" hidden>
    
            <form id='login' METHOD="POST" ACTION="login.php">

                <hr>

                <h1> Login </h1>

                <input placeholder="Username" style="position: absolute; left: 1%" required>

                <br>
                <br>

                <input placeholder="Password" style="position: absolute; left: 1%" required>

                <br>
                <br>

                <input type="submit" value="Login" style="position: absolute; left: 1%;">

                <br>
                <br>

            </form>

        </section>

        <hr>

        <h1> Upload Question </h1>

        <hr>

        <section>

            <br>

            <div id="show_hide">

                <!-- Manipulate the Content inside the div with Show-Hide Button -->

                <button id='show_rules' style='position: absolute; left: 1%;'> Show Rules </button>

            </div>

            <br>
            <br>

        </section>

        <hr>

        <section id="authenticated">

            <h3> Meta Content </h3>

            <br>

            <span id="labels">
                
                <label for="number" style="position: absolute; left: 1%;"> Number </label>

                <label for="number" style="position: absolute; left: 12%;"> Grade </label>

                <label for="subject" style="position: absolute; left: 24%;"> Subject </label>
                
                <label for="topic" style="position: absolute; left: 45%;"> Topic </label>

                <label for="time" style="position: absolute; left: 84%;"> Duration </label>

                <label for="marks" style="position: absolute; left: 93%"> Marks </label>
            
            </span>

            <br>
            <br>
            <br>

            <span id="choices">

                <select name="number" id="number" style="position: absolute; left: 1%;" required>
                    <option value="1"> - Select - </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select name="grade" id="grade" style="position: absolute; left: 12%;" required>
                    <option value=""> - Select - </option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="University">University</option>
                </select>

                <select name="subject" class="subject" id="subject" style="position: absolute; left: 24%; width: 15%;" required>
                    
                    <option value=""> - Select - </option>
                    <option value=""> You have to select grade before you select a subject </option>

                </select>

                <select name="topic" class="topic" id="topic" style="position: absolute; left: 45%; width: 15%;">
                
                    <option value=""> - Select - </option>
                    <option value=""> You have to select a Subject before selecting a Topic </option>
                    
                </select>

                <span style="width: 100px; position: absolute; left: 85%;"> <span id="duration" value='0'> 00 </span> min </span>

                <select name="marks" id="marks" style="position: absolute; left: 93%" required>
                    <option value=""> - Select - </option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                
            </span>            

            <br>
            <br>
            <br>

            <form id='content' METHOD="POST" ACTION="process.php" enctype="multipart/form-data">

                <textarea name="context" type="text" style="width: 99%; height: 110px;" placeholder="Type Context and other Specifications here ...

Provide the Reader with a bit of Background Information ...

Say something about the Picture that you choose to Upload or Describe a Scenario in a Paragraph which you want to ask Questions about ...

For Example, in Mathematics, an Instruction: Simplify the Expressions below; Leave aswers in Simplest Root Form!"

                required></textarea>

                <br>
                <br>

                <input name="file" type="file" id="myFile" name="filename" style="position: absolute; left: 45%;" optional>

                <br>
                <br>

                <?php

                    if (isset($_GET['file'])) {

                        if ($_GET['file'] == 'format_not_allowed') {

                            echo "<p style='position: absolute; left: 40%; color: red;'> Only jpg, jpeg, png or svg file types are allowed </p>";
                            
                            echo "
                                <br>
                                <br>
                                <br>
                            ";

                        };

                        if ($_GET['file'] == 'upload_error') {

                            echo "<p style='position: absolute; left: 40%; color: red;'> There was problem uploading your file </p>";
                            
                            echo "
                                <br>
                                <br>
                                <br>
                            ";

                        };

                        if ($_GET['file'] == 'size_limit') {

                            echo "<p style='position: absolute; left: 40%; color: red;'> The file you tried uploading is too large </p>";
                            
                            echo "
                                <br>
                                <br>
                                <br>
                            ";

                        };
                        
                    };
                    
                    // file_format=not_allowed;

                ?>
                
                <hr>

                <h3> Subquestions </h3>

                <br>

                <a style="position: absolute; left: 1.5%">#</a>
                <a style="position: absolute; left: 5%;"> Phrase or Sentence </a>
                <a style="position: absolute; left: 53%"> Memorandum </a>
                <a style="position: absolute; left: 76%"> Level </a>
                <a style="position: absolute; left: 85%"> Time </a>
                <a style="position: absolute; left: 94%"> Points </a>

                <br>
                <br>

                <div id="subqs">
                
                    <span>
                        <input id="qnum1.1" class="qnum1.1" name="qnum1_1" value="1.1" type="text" style="width: 2%" required>
                        <input id="q1.1" name="q1_1" type="text" style="width: 45%; position: absolute; left: 5%" placeholder="Phrasing; This is where you should ask your question. Remember correct punctuation!" required>
                        <input id="s1.1" name='s1_1' type="text" placeholder="Correct Answer." style="width: 300px; position: absolute; left: 53%; width: 20%" required>
                        <input id="l1.1" class= 'level' name="l1_1" type="number" min='1' max='4' style="width: 30px; position: absolute; left: 76%" required>
                        <input id="t1.1" class='time' name="t1_1" type="number" min='1' max='12' style="width: 30px; position: absolute; left: 85%" required>
                        <input id="m1.1" class="mark" name="m1_1" type="number" min="1" max="10" style="width: 30px; position: absolute; left: 94%" required>
                    </span>
                    
                </div>

                <br>
                <br>

                <input type="hidden">
                
                <hr>

                <br>

                <button id="add"> Add Subquestion </button>

                <button id="rmv"> Remove Subquestion </button>

                <span style="width: 100px; position: absolute; left: 85%;"> <span id="totalTime"> 00 </span> min </span>

                <span style="width: 100px; position: absolute; left: 95%;"> [<span id="totalMarks"> 0 </span>] </span>

                <br>
                <br>

                <input type="hidden" id="num" class="num" name="num">
                <input type="hidden" id="sub" class="sub" name="sub">
                <input type="hidden" id="pnt" class="pnt" name="pnt">
                <input type="hidden" id="cnt" class="cnt" name="cnt">
                <input type="hidden" id="tpk" class="tpk" name="tpk">
                <input type="hidden" id="grd" class="grd" name="grd">
                <input type="hidden" id="dur" class="dur" name="dur">
                

                
                <input type="submit" id="submit" class="submit" disabled="true" name="submit">

                <span style="width: 100px; position: absolute; left: 84%;"> Total Time </span>

                <span style="width: 100px; position: absolute; left: 93%;"> Total Marks </span>

            </form>

            <br>

            <hr>

            <br>

            <a href="generate.php"> Generate Question Paper </a>

            <br>
            <br>

            <hr>

            <br>

            We Rely on You as a Contributor.

            <br>
            <br>

            Thank you for Helping us Populate a Database that Generates Good Quality Question Papers.
            
            <br>
            <br>

            <a href="support.html"> Feedback? </a>

            <br>
            <br>

            <hr>

        </section>

        <!-- Javascript Document Links -->

        <script src="./scripts/onloadevent.js"></script>
        <script src="./scripts/showhiderulesevent.js"></script>
        <script src="./scripts/gradechangeevent.js"></script>
        <script src="./scripts/pointschangeevent.js"></script>
        <script src="./scripts/numberchangeevent.js"></script>
        <script src="./scripts/subjectchangeevent.js"></script>
        <script src="./scripts/topicchangeevent.js"></script>
        <script src="./scripts/timechangeevent.js"></script>
        <script src="./scripts/markchangeevent.js"></script>
        <script src="./scripts/addsubquestionevent.js"></script>
        <script src="./scripts/removesubquestionevent.js"></script>    
        <script src="./scripts/validatefunction.js"></script>

    </body>

</html>