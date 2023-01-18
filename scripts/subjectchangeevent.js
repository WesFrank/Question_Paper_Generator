$('#subject').on('change', function() {

    var subject = document.getElementById("subject");

    var sub = subject.options[subject.selectedIndex].value;

    document.getElementById('sub').value = sub;

    // If Subject is changed, change the list of possible topics accordingly/appropriately in div with id "topic"

    // Set inner HTML of topic input according to the subject chosen in the subject input

    var e = document.getElementById("topic");
    var topic = e.value;
    
    if (topic == '') {

        var submit = document.getElementById("submit");

        submit.setAttribute("disabled", true);

    } else if (topic !== '') {

        var mark = document.getElementById("marks");

        var mrk = mark.options[mark.selectedIndex].value;
    
        var total = document.getElementById("totalMarks");
    
        var tot = total.innerHTML;
    
        document.getElementById('pnt').value = mrk;

        // First Check if Marks and Points are equal before Submit Button is Activated

        if (parseInt(mrk) == parseInt(tot) && validate() == false) {

            var submit = document.getElementById("submit");

            submit.removeAttribute("disabled");

        } else if (parseInt(mrk) != parseInt(tot) || validate() == true) {

            var submit = document.getElementById("submit");

            submit.setAttribute("disabled", true);

        }
    
    }

    if (sub == '') {

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            +"<option value=''> You have to select a Subject before selecting a Topic </option>"
        
        ;
        
        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    // School Subjects

    if (sub == "Math1"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            +"<option value='Number_Systems'> Number Systems </option>"
            +"<option value='Algebra'> Algebra </option>"
            +"<option value='Exponents'> Exponents </option>"
            +"<option value='Surds'> Surds </option>"
            +"<option value='Logarithms'> Logarithms </option>"
            +"<option value='Discriminant'> Discriminant </option>"
            +"<option value='Equations_and_Inequalities'> Equations & Inequalities </option>"
            +"<option value='Sequences_and_Series'> Sequences & Series </option>"
            +"<option value='Number_Patterns'> Number Patterns </option>"
            +"<option value='Functions'> Functions </option>"
            +"<option value='Graphs'> Graphs </option>"
            +"<option value='Differential_Calculus'> Differential Calculus </option>"
            +"<option value='Probability'> Probability </option>"
            +"<option value='Probability'> Finance </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Math2"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            +"<option value='Statistics'> Statistics </option>"
            +"<option value='Measurement'> Measurement </option>"
            +"<option value='Trigonometric_Application'> Trigonometric Application </option>"
            +"<option value='Trigonometric_Identities'> Trigonometric Identities </option>"
            +"<option value='Trigonometric_Functions'> Trigonometric Functions </option>"
            +"<option value='Analytic_Geometry'> Analytic Geometry </option>"
            +"<option value='Euclidean Geometry'> Euclidean Geometry </option>"
            +"<option value='Midpoint_Theorem'> Midpoint Theorem </option>"
            +"<option value='Similarity_and_Congruence'> Similarity & Congruence </option>"
            +"<option value='Transformation_Geometrys'> Transformation Geometry </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Math3"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            +"<option value='Recursive_Sequences_and_Series'> Recursive Sequences & Series </option>"
            +"<option value='Counting_Principles'> Counting Principles </option>"
            +"<option value='Contingency_Tables'> Contingency Tables </option>"
            +"<option value='Venn_Diagrams'> Venn Diagrams </option>"
            +"<option value='Method_of_Least_Squares'> Method of Least Squares </option>"
            +"<option value='Normal_Distribution'> Normal Distribution </option>"
            +"<option value='Cummulative_Statistics'> Cumulative Statistics </option>"
            +"<option value='Circle_Geometry'> Circle Geometry </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Tech_Math1"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            +"<option value='Number_Systems'> Number Systems </option>"
            +"<option value='Imaginary_Complex_Numbers'> Imaginary/Complex Numbers </option>"
            +"<option value='Binary_Numbers'> Binary Numbers </option>"
            +"<option value='Logarithms'> Logarithms </option>"
            +"<option value='Discriminant'> Discriminant </option>"
            +"<option value='Exponents_and_Surds'> Exponents & Surds </option>"
            +"<option value='Equations_and_Inequalities'> Equations & Inequalities </option>"
            +"<option value='Functions_and_Graphs'> Functions & Graphs </option>"
            +"<option value='Finance_Growth_and_Decays'> Finance, Growth & Decay </option>"
            +"<option value='Differential_Calculus'> Differential Calculus </option>"
            +"<option value='Integration'> Integration </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }
    
    if (sub == "Tech_Math_2"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            +"<option value='Analytic_Geometry'> Analytic Geometry </option>"
            +"<option value='Trigonometry'> Trigonometry </option>"
            +"<option value='Trigonometric_Functions'> Trigonometric Functions </option>"
            +"<option value='Euclidean_Geometry'> Euclidean Geometry </option>"
            +"<option value='Analytic_Geometry'> Analytic Geometry </option>"
            +"<option value='Mensuration'> Mensuration </option>"
            +"<option value='Angular_Motion'> Angular Motion </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "IEB_Syllabus_Math1"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            +"<option value='Complex_Numbers'> Complex Numbers </option>"
            +"<option value='Exponents'> Exponents </option>"
            +"<option value='Logarithms'> Logarithms </option>"
            +"<option value='Differentiation'> Differentiation </option>"
            +"<option value='Trigonometry'> Trigonometry </option>"
            +"<option value='Integration'> Integration </option>"
            +"<option value='Functions'> Functions </option>"
            +"<option value='Limits'> Limits </option>"
            +"<option value='Critical_Points'> Critical Points </option>"
            +"<option value='Asymptotes'> Asymptotes </option>"
            +"<option value='Optimization'> Optimization </option>"
            +"<option value='Application'> Application </option>"
            +"<option value='Calculus'> Calculus </option>"
            +"<option value='Absolute_Values'> Absolute Values </option>"
            +"<option value='Induction'> Induction </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "IEB_Syllabus_Math2"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            +"<option value='Probability_Theory'> Probability Theory </option>"
            +"<option value='Probability_Functions'> Probability Functions </option>"
            +"<option value='Probability_Application'> Probability Application </option>"
            +"<option value='Inferential_Statistics'> Inferential Statistics </option>"
            +"<option value='Graph_Theory'> Graph Theory </option>"
            +"<option value='Matrices'> Matrices </option>"
            +"<option value='Financial_Models'> Financial Models </option>"
            +"<option value='Recursive Models'> Recursive Models </option>"
            +"<option value='Dynamical Systems'> Dynamical Systems </option>"
                
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "ML1"){

        topic = document.getElementById("topic");

        topic.innerHTML = 

            "<option value=''> - Select - </option>"    
            +"<option value='Numbers_and_Calculations'> Numbers & Calculations </option>"
            +"<option value='Patterns_and_Relationships'> Patterns & Relationships </option>"
            +"<option value='Ratios_and_Rates'> Ratios & Rates </option>"
            +"<option value='Dimensional_Analysis_and_Equivalence'> Dimensional Analysis </option>"
            +"<option value='Finances'> Finances </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "ML2"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            +"<option value='Measurements_and_Conversions'> Measurements & Conversions </option>"
            +"<option value='Perimeter_Area_and_Volume'> Perimeter, Area & Volume </option>"
            +"<option value='Maps_and_Plans'> Maps & Plans </option>"
            +"<option value='Data_Handling'> Data Handling </option>"
            +"<option value='Probability'> Probability </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "CAT1"){

        topic = document.getElementById("topic");

        topic.innerHTML = 

            "<option value=''> - Select - </option>"
            +"<option value='Information'> Information </option>"
            +"<option value='Hardware'> Hardware </option>"
            +"<option value='Software'> Software </option>"
            +"<option value='Network'> Network </option>"
            +"<option value='Communication'> Communication </option>"
            +"<option value='Sosial_Implications'> Sosial Implications </option>"
            +"<option value='Solution_Development'> Solutions Development </option>"
            +"<option value='Document_and_Files'> Documents & Files </option>"
            +"<option value='Data_Handling'> Data Handling </option>"
            +"<option value='Servers'> Servers </option>"
                    
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "CAT2"){

        topic = document.getElementById("topic");

        topic.innerHTML = 

            "<option value=''> - Select - </option>"
            +"<option value='HTML'> HTML </option>"
            +"<option value='CSS'> CSS </option>"
            +"<option value='Excel'> Excel </option>"
            +"<option value='Word'> Word </option>"
            +"<option value='Access'> Access </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "IT1"){

        topic = document.getElementById("topic");

        topic.innerHTML = 

            "<option value=''> - Select - </option>"
            +"<option value='Modelling'> Modelling </option>"
            +"<option value='Logic'> Logic </option>"
            +"<option value='Hardware'> Hardware </option>"
            +"<option value='Software'> Software </option>"
            +"<option value='Programming'> Programming </option>"
            +"<option value='Algorithms'> Algorithms </option>"
            +"<option value='Operating_Systems'> Operating Systems </option>"
            +"<option value='Servers'> Servers </option>"
            +"<option value='Databases'> Databases </option>"
            +"<option value='Protocols'> Protocols </option>"
            +"<option value='Networks'> Networks </option>"
            +"<option value='Security'> Security </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "IT2"){

        topic = document.getElementById("topic");

        topic.innerHTML = 

            "<option value=''> - Select - </option>"

            +"<option value='C'> C </option>"
            +"<option value='C#'> C# </option>"
            +"<option value='C++'> C++ </option>"

            +"<option value='Assembly_Language'> Assembly Language </option>"

            +"<option value='HTML'> HTML </option>"
            +"<option value='CSS'> CSS </option>"
            
            +"<option value='SQL'> SQL </option>"

            +"<option value='Javascript'> Javascript </option>"
            +"<option value='Javascript'> AJAX </option>"
            +"<option value='Javascript'> J-Query </option>"
            
            +"<option value='php'> php </option>"
            +"<option value='Python'> Python </option>"

            +"<option value='Hacker_Rank'> Hacker Rank </option>"
            
            +"<option value='Frameworks'> Frameworks </option>"
            +"<option value='Packages'> Packages </option>"
            +"<option value='Modules'> Modules </option>"
            +"<option value='Programming_Paradigms'> Programming Paradigms </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "PSci1"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"

            
            
            +"<option value='' style='background-color: yellow;'> (I) A First Course in Science </option>"
            
            
            +"<option value='Experiments_Measurement_and_Observation'> Experiments, Measurment & Observation </option>"

            +"<option value='Accuracy_versus_Precision'> Accuracy versus Precision </option>"

            +"<option value='The_Base_SI_Units_System'> The Base SI Unit System </option>"

            +"<option value='Averages_and_Approximation'> Averages & Approximation </option>"

            +"<option value='Rates_and_Ratios'> Rates & Ratios </option>"


            
            +"<option value='' style='background-color: yellow;'> (II) Kinematics </option>"


            +"<option value='Vectors_and_Scalars'> Vectors & Scalars </option>"

            +"<option value='The_Mathematics_of_Vectors'> The Mathematics of Vectors </option>"

            +"<option value='Uniformity_and_Instanteneity'> Uniformity & Instanteneity </option>"

            +"<option value='Graphs_and_Equations_of_Motion'> Graphs & Equations of Motion </option>"

            +"<option value='Distance_versus_Time_Graphs'> Distance versus Time Graphs </option>"

            +"<option value='Rectilinear_Motion'> Rectilinear Motion </option>"

            +"<option value='Projectile_Motion'> Projectile Motion </option>"



            +"<option value='' style='background-color: yellow;'> (III) Mechanics </option>"


            +"<option value='Contact_versus_Non_Contact_Forces'> Contact versus Non-Contact Forces </option>"

            +"<option value='Constant_versus_Change'> Constant versus Change </option>"

            +"<option value='Equilibrium_and_Motion'> Equilibrium and Motion </option>"

            +"<option value='Friction'> Friction </option>"

            +"<option value='Force_and_Momentum'> Force & Momentum </option>"

            +"<option value='Conservation_of_Momentum'> Conservation of Momentum </option>"
            
            +"<option value='Force_and_Acceleration'> Force & accelation </option>"

            +"<option value='Force_and_Velocity'> Force & velocity </option>"

            +"<option value='Newtons_Laws_of_Motion'> Newton's Laws of Motion </option>"

            +"<option value='Work_Energy_and_Power'> Work, Energy & Power </option>"

            +"<option value='Potential_and_Kinetic_Energy'> Potential & Kinetic Energy </option>"
            
            +"<option value='Conservation_of_Total_Mechanical_Energy'> Conservation of Total Mechanical Energy </option>"
            
            +"<option value='Two_Body_Problem'> Two-Body Problem </option>"

            +"<option value='Free_Fall_Motion'> Free Fall Motion </option>"

            +"<option value='Newtons_Theory_of_Gravity'> Newton's Theory of Gravity </option>"

            

            +"<option value='' style='background-color: yellow;'> (IV) Thermodynamics </option>"

            
            +"<option value='The_Ideal_Gas_Model'> The Ideal Gas Model </option>"

            +"<option value='Chemical_Systems'> Chemical Systems </option>"

            +"<option value='Heat_and_Dispersion'> Heat & Dispersion </option>"

            +"<option value='Enthalpy_and_Entropy'> Enthalpy & Entropy </option>"

            +"<option value='Equilibrium_and_Le_Chataliers_Principle'> Equilibrium & Le Chatalier's Principle </option>"


            
            +"<option value='' style='background-color: yellow;'> (V) Magnetism </option>"
            

            +"<option value='Magnetic_Field'> Magnetic Field </option>"

            +"<option value='Magnetic_Flux'> Magnetic Flux </option>"



            +"<option value='' style='background-color: yellow;'> (V) Electrostatics </option>"


            +"<option value='Charge'> Charge </option>"
            
            +"<option value='Conservation_of_Charge'> Conservation of Charge </option>"

            +"<option value='Electric_Force'> Electric Force </option>"

            +"<option value='Electric_Field'> Electric Fields </option>"

            +"<option value='Coulombs_Law'> Coulomb's Law </option>"

            +"<option value='Milikans_Experiment'> Milikan's Experiment </option>"

            +"<option value='Electrostatic_Potential_Energy'> Electrostatic Potential Energy </option>"

            +"<option value='Lorenz_Force'> Lorenz Force </option>"



            +"<option value='' style='background-color: yellow;'> (VI) Electro-Dynamics </option>"


            +"<option value='Solenoids'> Solenoids </option>"

            +"<option value='Electromagnetic_Induction'> Electromagnetic Induction </option>"

            +"<option value='Electric_Current'> Electric Current </option>"

            +"<option value='Faradays_Right_Hand_Rule'> Faraday's Right-Hand Rule </option>"

            
            
            +"<option value='' style='background-color: yellow;'> (VII) Electro-Chemistry </option>"

            
            +"<option value='Batteries'> Batteries </option>"

            +"<option value='Oxidation_and_Reduction_Reactions'> Oxidation & Reduction Reactions </option>"

            +"<option value='Electric_Energy'> Electric Energy </option>"



            +"<option value='' style='background-color: yellow;'> (VIII) Electric Circuits </option>"


            +"<option value='Series_versus_Parallel'> Series versus Parallel </option>"

            +"<option value='Potential_Difference'> Potential Difference </option>"

            +"<option value='Resistance_and_Ohms_Law'> Resistace & Ohm's Law </option>"
            
            +"<option value='Electromagnetic_Force'> Electromagentic Force (EMF) </option>"

            +"<option value='Internal_Resistance'> Internal Resistance </option>"
            
            +"<option value='Capacitance_and_Discharge'> Capacitance & Discharge </option>"

            +"<option value='Transformers'> Transformers </option>"

            +"<option value='Work_Power_and_Intensity'> Work, Power & Intensity </option>"

            +"<option value='Nikola_Tesla_versus_Thomas_Edison'> Nikola Tesla versus Thomas Edison </option>"

            +"<option value='Alternating_versus_Direct_Current'> Alternating versus Direct Current </option>"

            +"<option value='Dynamos_and_Alternators'> Dynamo's & Alternators & Generators </option>"

            +"<option value='The_Photo_Electric_Effect'> The Photo-Electric Effect </option>"
            


            +"<option value='' style='background-color: yellow;'> (IX) Oscillation & Waves </option>"


            +"<option value='Longitudinal_versus_Transversal'> Longitudinal versus Transversal </option>"

            +"<option value='Sound_and_Propagation'> Sound & Propogation </option>"

            +"<option value='Doppler_Effect'> Doppler Effect </option>"

            +"<option value='Superposition_and_Interference'> Superposition and Interference </option>"

            +"<option value='Huygens_Principle'> Huygens' Principle </option>"            
            
            +"<option value='Standing_Waves'> Standing Waves </option>"

            +"<option value='Diffraction'> Diffraction </option>"
            
            

            +"<option value='' style='background-color: yellow;'> (X) Optics </option>"

            
            +"<option value='Lenses_and_Mirrors'> Lenses & Mirrors & Prisms </option>"

            +"<option value='Refraction'> Refraction </option>"

            +"<option value='Snells_Law'> Snell's Law </option>"

            +"<option value='The_Dual_Nature_of_Light'> The Dual Nature of Light </option>"

            +"<option value='Electro_Magnetic_Waves'> Electro-Magnetic Waves </option>"
        
            +"<option value='Single_Split_Diffraction_of_Light'> Single Split Diffraction of Light </option>"

            +"<option value='Diffraction_Grating'> Diffraction Grating </option>"

            +"<option value='Spectroscopy'> Spectroscopy </option>"



            +"<option value='' style='background-color: yellow;'> (XI) Atomic Model </option>"

            
            +"<option value='Periodic_Table'> Periodic Table </option>"

            +"<option value='Phases_of_Matter'> Phases of Matter </option>"
            
            +"<option value='Properties_of_Materials'> Properties of Materials </option>"

            +"<option value='Orbitals_and_Energy_Levels'> Orbitals & Energy Levels </option>"

            +"<option value='Relativity_Theory'> Relativity Theory </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "PSci2"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"



            +"<option value='' style='background-color: yellow;'> (I) Stoichiometry </option>"

            
            +"<option value='Molar_Proportions'> Molar Proportions </option>"
            
            +"<option value='Percent_Composition'> Percent Composition </option>"
            
            +"<option value='Limiting_Reactants'> Limiting Reactants </option>"

            +"<option value='Saturation'> Saturation </option>"

            +"<option value='Percent_Yield'> Percent Yield </option>"

            +"<option value='Density'> Density </option>"

            
            
            +"<option value='' style='background-color: yellow;'> (II) Physical Chemistry </option>"
                        

            +"<option value='The_Periodic_Table'> The Periodic Table </option>"

            +"<option value='Properties_of_Elements'> Properties of Elements </option>"

            +"<option value='States_of_Matter'> States of Matter </option>"

            +"<option value='Avogadros_Number'> Avogadro's Number </option>"

            +"<option value='Ideal_Gas_Law'> Ideal Gas Law </option>"



            +"<option value='' style='background-color: yellow;'> (III) Chemical Reactions </option>"


            +"<option value=''> Ions & Salts </option>"

            +"<option value='Haber_Process'> Covalent Bonding </option>"

            +"<option value=''> Lewis Dot Notation </option>"

            +"<option value='Metallic_Bonding'> Metallic Bonding </option>"

            +"<option value=''> Acids & Bases </option>"

            +"<option value='Conservation_of_Mass'> Conservation of Mass </option>"

            +"<option value='Reaction_Rates'> Reaction Rates </option>"

            +"<option value='Concentration'> Concentration </option>"

            

            +"<option value='' style='background-color: yellow;'> (IV) Thermodynamics </option>"

            
            +"<option value='The_Ideal_Gas_Model'> The Ideal Gas Model </option>"

            +"<option value='Chemical_Systems'> Chemical Systems </option>"

            +"<option value='Heat_and_Dispersion'> Heat & Dispersion </option>"

            +"<option value='Enthalpy_and_Entropy'> Enthalpy & Entropy </option>"

            +"<option value='Equilibrium_and_Le_Chataliers_Principle'> Equilibrium & Le Chatalier's Principle </option>"
            


            +"<option value='' style='background-color: yellow;'> (V) Electro-Chemistry </option>"

            
            +"<option value='Polarity'> Polarity </option>"

            +"<option value='Isotopes'> Isotopes </option>"            

            +"<option value='Redox_Reactions'> Redox Reactions </option>"



            +"<option value='Organic_Chemistry' style='background-color: yellow;'> (VI) Organic Chemistry </option>"
            
            
            +"<option value='Organic_Chemistry'> Carbon Bonds </option>"
            
            +"<option value='IUPAC_Nomencalture'> IUPAC Nomencalture </option>"
            
            +"<option value='Orbitals'> Orbitals </option>"



            +"<option value='' style='background-color: yellow;'> (VII) Chemical Processed </option>"


            +"<option value='Haber_Bosch_Process'> Haber-Bosch Process </option>"
            
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "EGD1"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            +"<option value='Civil_Drawings'> Civil Drawings </option>"
            +"<option value='Solid_Geometry'> Solid Geometry </option>"
            +"<option value='Interpretation_Nets_and_Development'> Interpretation, Nets & Development </option>"
            +"<option value='Perspective_Drawings'> Perspective Drawings </option>"
            +"<option value='Mechanical_Drawings'> Mechanical Drawings </option>"
            
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "EGD2"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            +"<option value='Mechanical_Drawing'> Mechanical Drawing </option>"
            +"<option value='Loci_of_a_Cam'> Loci of a Cam </option>"
            +"<option value='Points_of_a_Mechanism'> Loci of a Points of a Mechanism </option>"
            +"<option value='Isometric_Drawing'> Isometric Drawing </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "LSci1"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='Reproduction_in_Vertebrates'> Reproduction in Vertebrates </option>"
            +"<option value='Human_Reproduction'> Human Reproduction </option>"

            +"<option value='Responding_to_the_Environment_Humans'> Responding to the Environment (Humans) </option>"
            +"<option value='Responding_to_the_Environment_Plants'> Responding to the Environment (Plants) </option>"

            +"<option value='Endocrine_and_Homeostasis'> Endocrine & Homeostasis (Humans) </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "LSci2"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='DNA_Code_of_Life'> DNA: Code of Life </option>"
            +"<option value='Meiosis'> Meiosis </option>"
            +"<option value='Genetics_and_Inheritance'> Genetics and Inheritance </option>"
            +"<option value='Evolution'> Evolution </option>"
            
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "GEO1"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"

            +"<option value='The_Oceans' style='background-color: yellow;'> Weather Influences </option>"

            +"<option value='The_Oceans'> The Oceans </option>"
            +"<option value='Magnetosphere_and_Space'> Magnetosphere & Space </option>"
            +"<option value='Volcanos'> Volcanos </option>"
            +"<option value='Meteors_and_Meteorites'> Meteors and Meteorites </option>"
            +"<option value='Ecosystems'> Ecosystems </option>"

            +"<option value='' style='background-color: yellow;'> Climate & Weather </option>"

            +"<option value='Mid_Latitude_Cyclones'> Mid-Latitude Cyclones </option>"
            +"<option value='Tropical_Cyclones'> Tropical Cyclones </option>"
            +"<option value='Subtropical_Anti_Cyclones'> Subtropical Anti-cyclones </option>"
            +"<option value='Valley_Climates'> Valley Climates </option>"
            +"<option value='Urban_Climates'> Urban Climates </option>"
            +"<option value='Interpretation_of_Synoptic_Weather_Maps'> Interpretation of Synoptic Weather Maps </option>"
            

            +"<option value='' style='background-color: yellow;'> Geomorphology </option>"

            +"<option value='Drainage_Basins'> Drainage Basins </option>"
            +"<option value='Fluvial_Processes'> Fluvial Processes </option>"
            +"<option value='Rivers_and_Dams'> Rivers & Damns </option>"
            +"<option value='Geographical_Skills_and_Techniques' style='background-color: yellow;'> Geographical Skills & Techniques </option>"
            +"<option value='Mapwork'> Mapwork </option>"
            +"<option value='Topographic_Maps'> Topographic Maps </option>"
            +"<option value='Aerial_Photographs_and_Orthophoto_Maps'> Aerial Photographs & Orthophoto Maps </option>"
            +"<option value='Geographical_Information_Systems'> Geographical Information Systems </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }
    
    if (sub == "GEO2"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
        
            +"<option value='' style='background-color: yellow;'> Historical Geography </option>"

            +"<option value='Human_Civilization'> Human Civilization </option>"
            +"<option value='Empires_and_Castles'> Empires & Castles </option>"
            +"<option value='Colonization'> Colonization </option>"


            +"<option value='' style='background-color: yellow;'> Rural & Urban Settlements </option>"
            
            +"<option value='Rural_Settlements'> Rural Settlements </option>"
            +"<option value='Urban_Settlements'> Urban Settlements </option>"
            +"<option value='Urban_Hierarchies'> Urban Hierarchies </option>"
            +"<option value='Urban_Structures_and_Patterns'> Urban Structure & Patterns </option>"
            +"<option value='Urban_Settlement_Issues'> Urban Settlement Isues </option>"


            +"<option value='' style='background-color: yellow;'> Economic Geography </option>"       

            +"<option value='The_Structure_of_the_Economy'> The Structure of the Economy </option>"
            +"<option value='Agriculture'> Agriculture </option>"
            +"<option value='Mining'> Mining </option>"
            +"<option value='Secondary_and_Tertiary_Sectors'> Secondary & Tertiary Sectors </option>"
            +"<option value='The_Informal_Sector'> The Informal Sector </option>"
            

            +"<option value='' style='background-color: yellow;'> Geographical Skills & Techniques </option>"

            +"<option value='Mapwork_Techniques'> Mapwork Techniques </option>"
            +"<option value='Topological_Maps'> Topographic Maps </option>"
            +"<option value='Aerial_Photographs_and_Orthophoto_Maps'> Aerial Photographs & Orthophoto Maps </option>"
            +"<option value='Geographic_Information_Systems'> Geographic Information Systems </option>"


            +"<option value='' style='background-color: yellow;'> The Cycle of Life </option>"
            
            +"<option value='Earth_as_a_Whole'> Earth as a Whole </option>"
            +"<option value='Water_Recycling'> Recycling </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Eco1"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"

            +"<option value='' style='background-color: yellow;'> Macro-Economics </option>"

            +"<option value='Circular_Flow'> Circular Flow </option>"
            +"<option value='Business_Cycles'> Business Cycles </option>"
            +"<option value='Public_Sector'> Public Sector </option>"
            +"<option value='Foreign_Exchange_Markets'> Foreign Exchange Markets </option>"

            
            +"<option value='' style='background-color: yellow;'> Economic Pursuit </option>"

            +"<option value='Protectionism_Trade_and_Free_Markets'> Protectionism, Trade & Free Markets </option>"
            +"<option value='Growth_and_Development'> Growth & Development </option>"
            +"<option value='Industrial_Development_Policies'> Industrial Development Policies </option>"
            +"<option value='Economic_and_Social_Performance_Indicators'> Economic & Social Performance Indicators </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Eco2"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"

            +"<option value='' style='background-color: yellow;'> Micro-Economics </option>"
            +"<option value='Perfect_Markets'> Perfect Markets </option>"
            +"<option value='Imperfect_Markets'> Imperfect Markets </option>"
            +"<option value='Market_Failures'> Market Failures </option>"

            +"<option value='Contemporary_Economic_Issues' style='background-color: yellow;'> Contemporary Economic Issues </option>"
            +"<option value='Inflation'> Inflation </option>"
            +"<option value='Tourism'> Tourism </option>"
            +"<option value='Industrial_Development_Policies'> Industrial Development Policies </option>"
            +"<option value='Economic_and_Social_Performance_Indicators'> Economic & Social Performance Indicators </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Eng1"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='Language'> Language </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }
    
    if (sub == "Eng2"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='Language'> Literature </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Eng3"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='Language'> Creative Writing </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Afr1"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='Taal'> Taal </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }
    
    if (sub == "Afr2"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='Language'> Letterkunde </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Afr3"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='Language'> Skryf </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }   

    if (sub == "Bus1"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value=''> Business </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Bus2"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value=''> Business </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Acc1"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value=''> Accounting </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Acc2"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value=''> Accounting </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    // University Subjects

    if (sub == "Mathematics"){

        topic = document.getElementById("topic");

        topic.innerHTML = 

            "<option value=''> - Select - </option>"
            +"<option value='Algorithms_and_Proofs'> Algorithms & Proofs </option>"
            +"<option value='Mathematical_Discourse'> Mathematical Discourse </option>"
            +"<option value='The_Scientific_Method_and_Axiomatic_Principles'> The Scientific Mehtod and Axiomatic Princinples </option>"
            +"<option value='Mathematical_Modelling'> Mathematical Modelling </option>"

            +"<option value='Pre_Calculus'> Pre-Calculus </option>"
            +"<option value='Single_Variable_Calculus'> Single Variable Calculus </option>"
            +"<option value='Multivariable_Calculus'> Multivariable Calculus </option>"

            +"<option value='Vector_Calculus'> Vector Calculus </option>"
            +"<option value='Variational_Calculus'> Variational Calculus </option>"

            +"<option value='Complex_Analysis'> Complex Analysis </option>"

            +"<option value='Numerical_Analysis'> Numerical Analysis </option>"
            +"<option value='Combinatorics'> Combinatorics </option>"
            +"<option value='Number_Theory'> Number Theory </option>"
            +"<option value='Stochastic_Processes'> Stochastic Processes </option>"
            +"<option value='Probability_Theory'> Probability Theory </option>"
            +"<option value='Statistics'> Statistics </option>"

            +"<option value='Ordinary_Differential_Equations'> Ordinary Differential Equations </option>"
            +"<option value='Partial_Differential_Equations'> Partial Differential Equations </option>"
            +"<option value='Dynamical_Systems'> Dynamical Systems </option>"
            +"<option value='Integral_Equations'> Integral Equations </option>"
            +"<option value='Fractional_Calculus'> Fractional Calculus </option>"
                                    
            +"<option value='Linear_Algebra'> Linear Algebra </option>"
            +"<option value='Abstract_Algebra'> Abstract Algebra </option>"
            +"<option value='Ring_Theory'> Ring Theory </option>"
            +"<option value='Real_Analysis'> Real Analysis </option>"
            +"<option value='Topology'> Topology </option>"
            +"<option value='Functional_Analysis'> Functional Analysis </option>"
            +"<option value='Integration_and_Measure_Theory'> Integration & Measure Theory </option>"
            +"<option value='Operator_Theory'> Operator Theory </option>"

            +"<option value='Set_Theory'> Set Theory </option>"
            +"<option value='First_Oder_Propositional_Logic'> First Order Propositional Logic </option>"
            +"<option value='Modal_Logic'> Modal Logic </option>"
            +"<option value='Computational_Complexity_Theory'> Computational Complexity Theory </option>"

            +"<option value='Graph_Theory'> Graph Theory </option>"
                                    
            +"<option value='Euclidean_Geometry'> Euclidean Geometry </option>"
            +"<option value='Non_Euclidean_Geometry'> Non-Euclidean Geometry </option>"
            
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Biology"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='History_of_the_Earth'> History of the Earth </option>"
            +"<option value='Eco_Systems'> Eco Systems, Human Integration with Nature </option>"
            +"<option value='Evolution'> Evolution </option>"
            +"<option value='Archaeology'> Archaeology </option>"
            +"<option value='Paleontology'> Paleontology </option>"
            +"<option value='Geochronology'> Geochronology </option>"
            +"<option value='Evolution_Theory'> Evolution Theory </option>"
            +"<option value=''> Biological Classification, Nomencalture, Syntax and Conventions </option>"
            +"<option value='Genetics'> Genetics </option>"
            +"<option value='Genomics'> Genomics </option>"    
            +"<option value='Cell_Biology'> Cell Biology </option>"
            +"<option value='Biochemistry'> Biochemistry </option>"
            +"<option value='Biophysics'> Biophysics </option>"
            +"<option value='Cell_Biology'> Organic Chemistry </option>"
            +"<option value='Cell_Biology'> Cell Biology </option>"
            +"<option value='Anotmy'> Anatomy </option>"
            +"<option value='Physiology'> Physiology </option>"
            +"<option value='Botany'> Botany </option>"
            +"<option value='Zoology'> Zoology </option>"
            +"<option value='Ecology'> Ecology </option>"
            +"<option value='Molecular_Biology'> Molecular Biology </option>"
            +"<option value='Cell_Biology'> Cell Biology </option>"
            +"<option value='Population_Biology'> Population Biology </option>"
            +"<option value='Anatomy'> Anatomy </option>"
            +"<option value='Fungi'> Fungi </option>"
            +"<option value='Bacteriology'> Bacteriology </option>"
            +"<option value='Virology'> Virology </option>"
            +"<option value='Pathology'> Pathology </option>"
            +"<option value='Zology'> Zoology </option>"
            +"<option value='Protozoology'> Protozoology </option>"
            +"<option value='Archeology'> Archeology </option>"
            
            +"<option value='Vertebrates'> Vertebrates </option>"
            +"<option value='Invertebrates'> Invertebrates </option>"
            +"<option value='Marine_Biology'> Marine Biology </option>"

            +"<option value='Forestry'> Forestry </option>"

            +"<option value='Wildernis'> Wildernis </option>"
                        
            +"<option value='Ethology'> Ethology </option>"
            +"<option value='Sociology'> Sociology </option>"

            
            +"<option value='Biotechnology'> Biotechnology </option>"
            +"<option value='Forensics'> Forensics </option>"            
            +"<option value='Biological_Law_and_Criminology'> Biological Law & Criminology (Environmental Protection Act.) </option>"

            +"<option value='Agriculture'> Agriculture </option>"
            +"<option value='Recycling_Environmental_Awareness_Management'> Recycling, Environmental Awareness Management </option>"
            
            +"<option value='Industrial_Biology'> Industrial Biology </option>"
            
            +"<option value='Populations_Modelling'> Populations </option>"
            
            +"<option value='Medicine'> Medicine </option>"

            +"<option value=''> Neurology </option>"

            +"<option value='Pharmacology'> Pharmacology </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Linguistics"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"

            +"<option value='Phonetics'>Phonetics</option>"
            
            +"<option value='Semantics_and_Meaning'>Semantics & Meaning</option>"

            +"<option value='Grammar_and_Syntax'>Grammar & Syntax</option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Philosophy"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"

            +"<option value='Existential_Philosophy'>Existential Philosophy (Cosmology)</option>"
            
            +"<option value='Moral_Philosophy_Ethics'>Moral Philosophy (Ethics)</option>"
            
            +"<option value='Religious_Philosophy_Theology'>Religious Philosophy (Theology)</option>"

            +"<option value='Natural_Philosophy_Metaphysics'>Natural Philosophy (Metaphysics)</option>"

            +"<option value='Debate_and_Reasoning_Logic'>Debate & Reasoning (Logic)</option>"

            +"<option value='Paradoxes_and_Hyperboles'>Paradoxes & Hyperboles</option>"

            +"<option value='Greek_Philosophy'>Greek Philosophy</option>"

            +"<option value='Chinese_Philosophy'>Chinese Philosophy</option>"

            +"<option value='Middle_Eastern_Philosophy'>Middle-Eastern Philosophy</option>"

            +"<option value='African_Philosophy'>African Philosophy</option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Psychology"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"

            +"<option value='' style='background-color: yellow;'> Developmental Psychology </option>"

            +"<option value='Neurology'> Neurology </option>"
            +"<option value='Cognitive_Science'> Cognitive Science </option>"
            +"<option value='Philosophy_of_Psychology'> Philosophy of Psychology </option>"
            +"<option value='Sociology_and_Community'> Sociology & Community </option>"
            
            +"<option value='Experimental_Psychology'> Experimental Psychology  </option>"
            +"<option value='Performance_Psychology'> Performance Psychology </option>"
            +"<option value='Evolutionary_Psychology'> Evolutionary Psychology </option>"
            +"<option value='Educational_Psychology'> Educational Psychology </option>"
                        
            
            +"<option value='' style='background-color: yellow;'> Clinical Psychology Trauma, Pain, Stress, Anxiety, Depression </option>"
            
            +"<option value='Public_Service'> Public Service  </option>"
            +"<option value='Trauma_Pain_Stress_Anxiety_Depression'> Trauma, Pain, Stress, Anxiety, Depression </option>"
            +"<option value='Forensic_Psychology'> Forensic Psychology  </option>"
            +"<option value='Rehabilitation_Psychology'> Rehabilitation Psychology </option>"
            +"<option value='Industrial_Psychology'> Industrial Psychology </option>"
            
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "History"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            "<option value='Wars_and_Empired'> Wars & Empires </option>"
            "<option> Paleonthology </option>"
            "<option> Anthropology </option>"
            "<option> Cultures & Civilization </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Art"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option> Art was selected </option>"

            +"<option value='Architecture'> Architecture </option>"
            +"<option value='Drawing_and_Sketching'> Drawing & Sketching </option>"
            +"<option value='Sculpting_and_Etching'> Sculpting $ Etching </option>"
            +"<option value='Painting'> Painting </option>"
            +"<option value='Photography'> Photography </option>"
            +"<option value='Dancing_and_Movement'> Dancing & Movement </option>"
            +"<option value='Drama_and_Acting'> Drama & Acting </option>"
            +"<option value='Music_and_Rythm'> Music & Rythm </option>"
            +"<option value='Literary_Art'> Literary Art </option>"
            +"<option value='Contemporary_Art'> Contemporary Art </option>"
            
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Computer_Science"){

        topic = document.getElementById("topic");

        topic.innerHTML =

            "<option value=''> - Select - </option>"
            
            +"<option value='Logic'>Logic</option>"
            +"<option value='Boolean_Arithmetic'>Boolean Arithmetic</option>"
            +"<option value='Binary_Arithmetic'>Binary Arithmetic</option>"
            +"<option value='Variables_Data_Types_and_Parameters'>Variables, Data Types and Parameters</option>"

            +"<option value='Hardware'>Hardware</option>"
            +"<option value='Software'>Software</option>"

            +"<option value='Markup_and_Design'>Markup Language & Design</option>"
            +"<option value='Databases'>Databases</option>"
            +"<option value='Servers'>Servers</option>"
            +"<option value='Stacks'>Stacks</option>"
            +"<option value='Web_Developing'>Web Developing</option>"
            
            +"<option value='Framework'>Frameworks</option>"
            +"<option value='API'>API</option>"
            +"<option value='Modules'>Modules</option>"
            +"<option value='Packages'>Packages</option>"
            +"<option value='Library'>Library</option>"

            +"<option value='Protocols'>Protocols</option>"
            +"<option value='Encryption'>Encryption</option>"
            +"<option value='Error_Correction'>Error Correction</option>"
            
            +"<option value='Industry_Practices'>Industry Practices</option>"
            +"<option value='Network'>Network</option>"
            +"<option value='Security'>Security</option>"

            +"<option value='UX_and_Design'>UX & Design</option>"
            +"<option value='Algorithms'>Algorithms</option>"
            +"<option value='Procedures'>Procedures</option>"
            +"<option value='Functions'>Functions</option>"
            +"<option value='Classes'>Classes</option>"
            +"<option value='Loops'>Loops</option>"

            +"<option value='Programming_Languages'>Programming Languages</option>"

            +"<option value='Procedural_Programming'>Procedural Programming</option>"
            +"<option value='Functional_Programming'>Functional Programming</option>"
            +"<option value='Object_Oriented_Programming'>Object Oriented Programming</option>"
            
            +"<option value='Mathematics_for_Computer_Science'>Mathematics for Computer Science</option>"
           
            +"<option value='Robotics'>Robotics</option>"
            +"<option value='Data_Science'>Data Sience</option>"
            +"<option value='Machine_Learning'>Machine Learning</option>"
            +"<option value='Virtual_Reality'>Virtual Reality</option>"
            +"<option value='Artificial_Intelligence'>Articial Intelligence</option>"
            +"<option value='Neural_Networks'>Neural Networks</option>"
            +"<option value='Digital_Though_Processing'>Digital Thought Processing</option>"

            +"<option value='Architecture'>Architecture</option>"
            +"<option value='System_Integration'>Systems Integration</option>"

            +"<option value='Symbolic_Programming'>Symbolic Programming</option>"
            +"<option value='Simulation'>Simulation</option>"

            +"<option value='Computational_Complexity'> Computational Complexity </option>"            
            +"<option value='Decidability'> Decidibility </option>"
            +"<option value='NP_Completeness'> NP Completeness </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Physics"){

        topic = document.getElementById("topic");

        topic.innerHTML = 
        
            "<option value=''> - Select - </option>"
            
            
            +"<option value='' style='background-color: yellow;'> (I) A First Course in Science </option>"
            
            
            +"<option value='Experiments_Measurement_and_Observation'> Experiments, Measurment & Observation </option>"

            +"<option value='Accuracy_versus_Precision'> Accuracy versus Precision </option>"

            +"<option value='The_Base_SI_Units_System'> The Base SI Unit System </option>"

            +"<option value='Averages_and_Approximation'> Averages & Approximation </option>"


            
            +"<option value='' style='background-color: yellow;'> (II) Kinematics </option>"


            +"<option value='Vectors_and_Scalars'> Vectors & Scalars </option>"

            +"<option value='The_Mathematics_of_Vectors'> Vector Calculus </option>"

            +"<option value='Uniformity_and_Instanteneity'> Uniformity & Instanteneity </option>"

            +"<option value='Projectile_Motion'> Projectile Motion </option>"
            
            +"<option value='Angular_Motion'> Angular Motion </option>"

            +"<option value='Air_Resistance'> Air Resistance </option>"



            +"<option value='' style='background-color: yellow;'> (III) Mechanics </option>"

            
            +"<option value='Variational_Calculus'> Variational Calculus </option>"

            +"<option value='Classical_Mechanics'> Classical Mechanics </option>"

            +"<option value='Equilibrium_and_Motion'> Equilibrium and Motion </option>"

            +"<option value='Conservation_of_Momentum'> Conservation of Momentum </option>"

            +"<option value='Newtons_Laws_of_Motion'> Newton's Laws of Motion </option>"

            +"<option value='Work_Energy_and_Power'> Work, Energy & Power </option>"

            +"<option value='Potential_and_Kinetic_Energy'> Potential & Kinetic Energy </option>"
            
            +"<option value='Conservation_of_Total_Mechanical_Energy'> Conservation of Total Mechanical Energy </option>"
            
            +"<option value='Three_Body_Problem_and_Complexity'> Three-Body Problem & Complexity </option>"

            +"<option value='Degrees_of_Freedom'> Degrees of Freedom </option>"

            +"<option value='Free_Fall_Motion'> Free Fall Motion </option>"

            +"<option value='Newtons_Theory_of_Gravity'> Newton's Theory of Gravity </option>"

            +"<option value='Torque'> Torque </option>"
            
            +"<option value='Inertia'> Inertia </option>"

            +"<option value='Hookes_Law'> Hookes Law </option>"

            +"<option value='Pendulum'> Pendulum </option>"

            +"<option value='Waves_and_Oscilation'> Waves & Oscillation </option>"


            
            +"<option value='' style='background-color: yellow;'> (IV) Fluid Dynamics </option>"


            +"<option value='Toricellis_Law'> Toricelli's Law </option>"

            +"<option value='Convection_and_Turbulance'> Convection & Turbulance </option>"

            +"<option value='Bernoullis_Principle'> Bernoulli's Principle </option>"

            +"<option value='Viscosity'> Viscosity </option>"



            +"<option value='' style='background-color: yellow;'> (V) Hydro Statics </option>"


            +"<option value='Pressure_and_Density'> Pressure & Density </option>"

            +"<option value='Buoyancy'> Buoyancy </option>"

            

            +"<option value='' style='background-color: yellow;'> (VI) Thermodynamics </option>"

            
            +"<option value='Newtons_Law_of_Cooling'> Newton's Law of Cooling </option>"

            +"<option value='Expansion_and_Contraction'> Expansion (Heat) & Contraction (Cooling) </option>"
            
            +"<option value='The_Ideal_Gas_Model'> The Ideal Gas Model </option>"

            +"<option value='Chemical_Systems'> Chemical Systems </option>"

            +"<option value='Heat_and_Dispersion'> Heat & Dispersion </option>"

            +"<option value='Enthalpy_and_Entropy'> Enthalpy & Entropy </option>"

            +"<option value='Equilibrium_and_Le_Chataliers_Principle'> Equilibrium & Le Chatalier's Principle </option>"


            
            +"<option value='' style='background-color: yellow;'> (VII) Magnetism </option>"
            

            +"<option value='Magnetic_Field'> Magnetic Field </option>"

            +"<option value='Magnetic_Flux'> Magnetic Flux </option>"



            +"<option value='' style='background-color: yellow;'> (VIII) Electro-Statics </option>"


            +"<option value='Charge'> Charge </option>"
            
            +"<option value='Conservation_of_Charge'> Conservation of Charge </option>"

            +"<option value='Electric_Force'> Electric Force </option>"

            +"<option value='Electric_Field'> Electric Fields </option>"

            +"<option value='Coulombs_Law'> Coulomb's Law </option>"

            +"<option value='Milikans_Experiment'> Milikan's Experiment </option>"

            +"<option value='Electrostatic_Potential_Energy'> Electrostatic Potential Energy </option>"

            +"<option value='Gauss_Law'> Gauss' Law </option>"

            +"<option value='Lorenz_Force'> Lorenz Force </option>"



            +"<option value='' style='background-color: yellow;'> (IX) Electro-Dynamics </option>"


            +"<option value='Solenoids'> Solenoids </option>"

            +"<option value='Electromagnetic_Induction'> Electromagnetic Induction </option>"

            +"<option value='Electric_Current'> Electric Current </option>"

            +"<option value='Faradays_Right_Hand_Rule'> Faraday's Right-Hand Rule </option>"            

            
            
            +"<option value='' style='background-color: yellow;'> (X) Electro-Chemistry </option>"

            
            +"<option value='Batteries'> Batteries </option>"

            +"<option value='Oxidation_and_Reduction_Reactions'> Oxidation & Reduction Reactions </option>"

            +"<option value='Electric_Energy'> Electric Energy </option>"



            +"<option value='' style='background-color: yellow;'> (XI) Electric Circuits </option>"


            +"<option value='Series_versus_Parallel'> Series versus Parallel </option>"

            +"<option value='Potential_Difference'> Potential Difference </option>"

            +"<option value='Resistance_and_Ohms_Law'> Resistace & Ohm's Law </option>"
            
            +"<option value='Electromagnetic_Force'> Electromagentic Force (EMF) </option>"

            +"<option value='Internal_Resistance'> Internal Resistance </option>"
            
            +"<option value='Capacitance_and_Discharge'> Capacitance & Discharge </option>"            

            +"<option value='Transformers'> Transformers </option>"

            +"<option value='Work_Power_and_Intensity'> Work, Power & Intensity </option>"

            +"<option value='Nikola_Tesla_versus_Thomas_Edison'> Nikola Tesla versus Thomas Edison </option>"

            +"<option value='Alternating_versus_Direct_Current'> Alternating versus Direct Current </option>"

            +"<option value='Dynamos_and_Alternators'> Dynamo's & Alternators </option>"

            +"<option value='The_Photo_Electric_Effect'> The Photo-Electric Effect </option>"

            +"<option value='Diodes'> Diodes </option>"

            +"<option value='Transistor'> Transistors </option>"
            
            +"<option value='Photovoltaic_Cells'> Photovoltaic Cells </option>"



            +"<option value='' style='background-color: yellow;'> (XII) Oscillation & Waves </option>"


            +"<option value='Longitudinal_versus_Transversal'> Longitudinal versus Transversal </option>"

            +"<option value='Sound_and_Propagation'> Sound & Propogation </option>"

            +"<option value='Doppler_Effect'> Doppler Effect </option>"

            +"<option value='Superposition_and_Interference'> Superposition and Interference </option>"

            +"<option value='Huygens_Principle'> Huygens' Principle </option>"            
            
            +"<option value='Standing_Waves'> Standing Waves </option>"

            +"<option value='Diffraction'> Diffraction </option>"
            
            

            +"<option value='' style='background-color: yellow;'> Optics </option>"

            
            +"<option value='Lenses_and_Mirrors'>  Lenses & Mirrors & Prisms </option>"

            +"<option value='Refraction'> Refraction </option>"

            +"<option value='Total_Internal_Reflection'> Total Internal Reflection </option>"            

            +"<option value='Snells_Law'> Snell's Law </option>"            

            +"<option value='The_Dual_Nature_of_Light'> The Dual Nature of Light </option>"

            +"<option value='Electro_Magnetic_Waves'> Electro-Magnetic Waves </option>"
        
            +"<option value='Single_Split_Diffraction_of_Light'> Single Split Diffraction of Light </option>"

            +"<option value='Diffraction_Grating'> Diffraction Grating </option>"

            +"<option value='Polarization_of_Light'> Polarization of Light </option>"

            +"<option value='Spectroscopy'> Spectroscopy </option>"



            +"<option value='' style='background-color: yellow;'> (XIV) Atomic Model </option>"

            
            +"<option value='Periodic_Table'> Periodic Table </option>"

            +"<option value='Phases_of_Matter'> Phases of Matter </option>"
            
            +"<option value='Properties_of_Materials'> Properties of Materials </option>"

            

            +"<option value='' style='background-color: yellow;'> Modern Physics </option>"


            +"<option value='Niels_Bohrs_Atomic_Model'> Niels Bohr's Atomic Model </option>"

            +"<option value='Orbitals_and_Energy_Levels'> Orbitals & Energy Levels </option>"

            +"<option value='Heisenbergs_Uncertainty_Principle'> Heisenberg's Uncertainty Principle </option>"

            +"<option value='De_Broglies_Standing_Wave_Model'> De Broglie's Standing Wave Model </option>"
            
            +"<option value='Schrodingers_Probabilistic_Wave_Model'> Schrodinger's Probabilistic Wave Model </option>"
            
            +"<option value='Hamiltonian_Mechanics'> Hamiltonian Mechanics </option>"
            
            +"<option value='Quantum_Mechanics'> Quantum Mechanics </option>"

            +"<option value='Nuclear_Physics'> Nuclear Physics </option>"

            +"<option value='Quantum_Optics'> Quantum Optics </option>"



            +"<option value='' style='background-color: yellow;'> Relativity Theory </option>"


            +"<option value='Electromagnetism'> Electromagnetism </option>"

            +"<option value='Maxwells_Equations'> Maxwell's Equations </option>"

            +"<option value='Simultaneity'> Simultaneity </option>"

            +"<option value='Michelson_Morley_Experiment'> Michelson-Morley Experiment </option>"

            +"<option value='Galilean_and_Lorentz_Transformations'> Galilean and Lorentz Transformations </option>"

            +"<option value='Length_Contraction'> Length Contraction </option>"

            +"<option value='Time_Dilation'> Time Dilation </option>"

            +"<option value='Energy_Mass_Equivalence'> Energy-Mass Equivalence </option>"

            +"<option value='Einsteins_Equivalence_Principle'> Einstein's Equivalence Principle </option>"
            
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Astronomy"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            
            
            +"<option value='' style='background-color: yellow;'> Celestial Mechanics </option>"

            
            +"<option value='Ancient_Greek_Astronomy'> Ancient Greek Astronomy </option>"

            +"<option value='Galileos_Observation'> Galileo's Observations </option>"

            +"<option value='Keplers_Laws_of_Motion'> Kepler's Laws of Motion </option>"

            +"<option value='Newton's Universal Theory of Gravity'> Newton's Universal Theory of Gravity </option>"
            
            +"<option value='Celestial_Mechanics'> Celestial Mechanics </option>"
            
            +"<option value='The_Doppler_Effect_of_Light'> The Doppler Effect of Light </option>"

            

            +"<option value='' style='background-color: yellow;'> Astro Physics </option>"

            
            +"<option value='Nuclear_Physics'> Nuclear Physics </option>"

            +"<option value='Stars_and_Galaxies'> Stars & Galaxies </option>"

            +"<option value='Black_Hole_Theory'> Black Hole Theory </option>"

            +"<option value='The_Big_Bang_Theory'> The Big Bang </option>"

        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    if (sub == "Geography"){

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            
            +"<option value='Geomatics'> Geomatics </option>"
            
            +"<option value='Cartography_and_Topography'> Cartography & Topography </option>"

            +"<option value='Palaeonthology'> Palaeonthology </option>"

            +"<option value='Anthropology'> Anthropology </option>"

            +"<option value='Archaeology'> Archaeology </option>"

            +"<option value='Pedology'> Pedology </option>"

            +"<option value='Climatology_and_Meteorology'> Climatology & Meteorology </option>"
            
            +"<option value='Environmental_Management'> Environmental Management </option>"
            
            +"<option value='Geodesy'> Geodesy </option>"
            
            +"<option value='Biogeography'> Biogemgraphy </option>"

            +"<option value='Glaciology'> Glaciology </option>"

            +"<option value='Oceanography'> Oceonography </option>"

            +"<option value='Landscape_Ecology'> Landscape Ecology </option>"
            
            +"<option value='Hydrology_and_Hydrography'> Hydrology & Hydrography </option>"

            +"<option value='Geopolitics'> Geopolotics </option>"

            +"<option value='Historical_Geography'> Historical Geomegraphy </option>"
            
            +"<option value='Demography'> Demography </option>"

            +"<option value='Urban_Geography'> Urban Geography </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

    // Check if Points and Marks Correspond to decide whether or not to activate the submit button

    if (parseInt(mrk) == parseInt(tot) && validate() == true) {

        submit = document.getElementById("submit");

        submit.removeAttribute("disabled");

    } else if (parseInt(mrk) != parseInt(tot) || validate() == false) {

        submit = document.getElementById("submit");

        submit.setAttribute("disabled", true);

    }

});