<script type="text/javascript">
    jQuery(document).ready(function($) {
        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
            runShowAndHide();
        });

            function runShowAndHide() {

                //
                // author: Pablo Cumpian Diaz
                // email: pablocumpian@gmail.com
                // company: transperfect
                // name: jira_show&hide
                // 

                //////////
                // VARS //
                //////////

                //states
                var show = "block"
                var hide = "none"

                //get the checkbuttons
                var DTP_check       = document.getElementById("customfield_11278-1")
                var ICR_check       = document.getElementById("customfield_11278-2")
                var PLT_check       = document.getElementById("customfield_11278-3")
                var Preflight_check = document.getElementById("customfield_11278-4")
                var Final_Eye_check = document.getElementById("customfield_11278-5")

                //DTP fields
                var aspera_path_field   = document.getElementById("customfield_11101").parentElement
                var dtp_task_field      = document.getElementById("customfield_11366").parentElement
                var dtp_software_field  = document.getElementById("customfield_11339").parentElement

                //ICR fields
                var icr_req_field = document.getElementById("customfield_11725").parentElement

                //PLT fields
                var plt_instr_field                 = document.getElementById("customfield_11359").parentElement
                var create_jira_project_field       = document.getElementById("customfield_11347").parentElement
                var block_testcase_field            = document.getElementById("customfield_11354").parentElement
                var block_device_test_field         = document.getElementById("customfield_11356").parentElement
                var block_testing_OS_details_field  = document.getElementById("customfield_11369").parentElement

                //Preflight fields
                var preflight_scope_field = document.getElementById("customfield_11371-1").parentElement.parentElement
                var preflight_notes_field = document.getElementById("customfield_11397").parentElement

                //Final Eye fields
                var final_eye_ins_field = document.getElementById("customfield_11943").parentElement

                var dtp_fields_array = [aspera_path_field, dtp_task_field, dtp_software_field]
                var plt_fields_array = [plt_instr_field, create_jira_project_field, block_testcase_field, block_device_test_field, block_testing_OS_details_field]
                var preflight_fields_array = [pre]


                ////////////
                // EVENTS //
                ////////////

                //add events to the trigger elements
                DTP_check.addEventListener("click", show_hide_DTP_fields)
                ICR_check.addEventListener("click", show_hide_ICR_fields)
                PLT_check.addEventListener("click", show_hide_PLT_fields)
                Preflight_check.addEventListener("click", show_hide_Preflight_fields)
                Final_Eye_check.addEventListener("click", show_hide_finalEye_fields)

                ///////////////
                // FUNCTIONS //
                ///////////////

                //funcions definitions to hide/show fields
                function show_hide_DTP_fields() {
                    if (DTP_check.checked) { 
                        aspera_path_field.style.display     = show   //show aspera path field
                        dtp_task_field.style.display        = show   //show dtp task field
                        dtp_software_field.style.display    = show   //show dtp software field
                    } else {
                        aspera_path_field.style.display     = hide   //hide aspera path field
                        dtp_task_field.style.display        = hide   //hide dtp task field
                        dtp_software_field.style.display    = hide   //hide dtp software field
                    }
                }

                function show_hide_ICR_fields() {
                    if (ICR_check.checked) { 
                        icr_req_field.style.display = show   //hide ICR requirements field
                    } else {
                        icr_req_field.style.display = hide   //hide ICR requirements field
                    }
                }

                function show_hide_PLT_fields() {
                    if (PLT_check.checked) { 
                        plt_instr_field.style.display                   = show   //block plt instructions field
                        create_jira_project_field.style.display         = show   //block create jira project? field
                        block_testcase_field.style.display              = show   //block testcase field
                        block_device_test_field.style.display           = show   //block device testing field
                        block_testing_OS_details_field.style.display    = show   //block testing OS details field
                    } else {
                        plt_instr_field.style.display                   = hide   //hide plt instructions field
                        create_jira_project_field.style.display         = hide   //hide create jira project? field
                        block_testcase_field.style.display              = hide   //hide testcase field
                        block_device_test_field.style.display           = hide   //hide device testing field
                        block_testing_OS_details_field.style.display    = hide   //hide testing OS details field
                    }
                }

                function show_hide_Preflight_fields() {
                    if (Preflight_check.checked) { 
                        preflight_scope_field.style.display = show  //hide Preflight Scope field
                        preflight_notes_field.style.display = show  //hide Preflight Notes field
                    } else {
                        preflight_scope_field.style.display = hide  //hide Preflight Scope field
                        preflight_notes_field.style.display = hide  //hide Preflight Notes field
                    }
                }

                function show_hide_finalEye_fields() {
                    if(Final_Eye_check.checked) {
                        final_eye_ins_field.style.display = show
                    } else {
                        final_eye_ins_field.style.display = hide
                    }
                }

                ///////////////
                // EXEC ZONE //
                ///////////////

                //we call the functions in order to keep a consistency from the begining between the ckeckboxes and the fields
                show_hide_DTP_fields()
                show_hide_PLT_fields()
                show_hide_ICR_fields()
                show_hide_Preflight_fields()
                show_hide_finalEye_fields()

            }    
        }
    );
    
</script>