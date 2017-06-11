 $(document).ready(function(){
                var links = [
                    {
                        "bgcolor":"red",
                        "icon":"+"
                    },
                    {
                        "url":"#AudioRecordPage",
                        "bgcolor":"red",
                        "color":"#fffff",
                        "icon":"<i class='fa fa-microphone material-icons'></i>",
                    },
					{
                        "url":"#Board",
                        "bgcolor":"red",
                        "color":"#fffff !important",
                        "icon":"<i class='fa fa-clone board_icon'></i>",
                    }
                ]
                $('.kc_fab_wrapper').kc_fab(links);
            })