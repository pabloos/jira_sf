<script type="text/javascript">
    jQuery(document).ready(function($) {
        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
            runShowAndHide();
        });

            function runShowAndHide() {

                //
                // author: Pablo Cumpian Diaz
                // email: pablocumpian@gmail.com
                // 

                //////////
                // VARS //
                //////////

                //states
                const show = "block"
                const hide = "none"

                //get the checkbuttons
                var DTP_check       = document.getElementById("customfield_11278-1")
                var ICR_check       = document.getElementById("customfield_11278-2")
                var PLT_check       = document.getElementById("customfield_11278-3")
                var Preflight_check = document.getElementById("customfield_11278-4")
                var Final_Eye_check = document.getElementById("customfield_11278-5")

                //DTP fields
                var aspera_path_field   = document.getElementById("customfield_11101").parentElement
                //var dtp_task_field      = document.getElementById("customfield_11366").parentElement
                var dtp_software_field  = document.getElementById("customfield_11339").parentElement

                //ICR field
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

                //Final Eye field
                var final_eye_ins_field = document.getElementById("customfield_11943").parentElement

                ////////////
                // ARRAYS //
                ////////////

                var checks_array            = [DTP_check, ICR_check, PLT_check, Preflight_check, Final_Eye_check]
                var functions_array         = [show_hide_DTP_fields, show_hide_ICR_fields, show_hide_PLT_fields, show_hide_Preflight_fields, show_hide_finalEye_fields]

                var dtp_fields_array        = [aspera_path_field, dtp_task_field, dtp_software_field]
                var plt_fields_array        = [plt_instr_field, create_jira_project_field, block_testcase_field, block_device_test_field, block_testing_OS_details_field]
                var preflight_fields_array  = [preflight_scope_field, preflight_notes_field]

                ////////////
                // EVENTS //
                ////////////

                //add events to the trigger elements
                for(var i = 0; i < checks_array.length; i++){
                    checks_array[i].addEventListener("click", functions_array[i])
                }

                // DTP_check.addEventListener("click", show_hide_DTP_fields)
                // ICR_check.addEventListener("click", show_hide_ICR_fields)
                // PLT_check.addEventListener("click", show_hide_PLT_fields)
                // Preflight_check.addEventListener("click", show_hide_Preflight_fields)
                // Final_Eye_check.addEventListener("click", show_hide_finalEye_fields)

                ///////////////
                // FUNCTIONS //
                ///////////////

                //we call the functions in order to keep a consistency from the begining between the ckeckboxes and the fields

                (function show_hide_DTP_fields() {
                    dtp_fields_array.forEach(element => {
                        element.style.display = (function() { 
                            return (DTP_check.checked ? show : hide) 
                        })()
                    })
                })()

                (function show_hide_ICR_fields() {
                    icr_req_field.style.display = (function() { 
                        return (ICR_check.checked ? show : hide) 
                    })()
                })()

                (function show_hide_PLT_fields() {
                    plt_fields_array.forEach(element => {
                        element.style.display = (function() { 
                            return (PLT_check.checked ? show : hide) 
                        })()
                    })
                })()

                (function show_hide_Preflight_fields() {
                    preflight_fields_array.forEach(element => {
                        element.style.display = (function() { 
                            return (Preflight_check.checked ? show : hide) 
                        })()
                    })
                })()

                (function show_hide_finalEye_fields() {
                    final_eye_ins_field.style.display = (function() { 
                        return (Final_Eye_check.checked ? show : hide) 
                    })()
                })()
            }    
        }
    );
    
</script>