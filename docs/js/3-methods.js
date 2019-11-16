$(document).ready(()=>{
    
    $.each($('.methods-switch-block p'), function(i){
        var outerThis = this;
        $(this).click(()=>{
            $.each($('.methods-switch-block p'), function(){
                $(this).css({
                    'border': 'none',
                    'color': '#646f79'
                })
            })
            $(this).css({
            'border-right': '5px solid #21C87A',
            'color': '#21C87A'
            })
            $.each($('.switch-block'),function(){
                if($(this).data('id') != $(outerThis).data('id')){
                    $(this).css({
                        'opacity': '0',
                        'z-index': '-1',
                    })
                    $(this).delay(200).queue(function(next){
                        $(this).css({
                            'display': 'none'
                        })
                        next();
                    })
                }
                if($(this).data('id') == $(outerThis).data('id')){
                    $(this).delay(200).queue(function(next){
                        $(this).css({
                            'display': 'block'

                        })
                        next();
                    })
                    $(this).delay(200).queue(function(next){
                        $(this).css({
                        'opacity': '1',
                        'z-index': '1',
                        })
                        next();
                    })
                }
            })

        })
    })
})
