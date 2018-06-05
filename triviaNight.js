$(document).ready(function(){
$.get('https://opentdb.com/api.php?amount=10&type=multiple',getGame)

function getGame(data){
    // console.log(data.results)
    var allData=data.results

    for(var i =0;i<allData.length;i++){
        $('#cat'+i).text(allData[i].category)
       
        $('#'+i).append(allData[i].question)
    }

    $('.q').on('click',function(){
        var q=$(this).attr('id');
        console.log(q)

        var index =0
        var objQ=""
        
        console.log(allData[q].correct_answer)
        objQ=allData[q];
      
        var answers=[]
        console.log(objQ)
        answers.push(objQ.correct_answer)
        for(i=0;i<objQ.incorrect_answers.length;i++){
            answers.push(objQ.incorrect_answers[i])
        }
        answers=answers.sort(function(a,b,c,d){return 0.5 - Math.random()});
        console.log(answers)
        for(i=0;i<answers.length;i++){
            $(".ans"+i).html("")
        }
        $(this).html(objQ.question+'<br>')
            
            for(i=0;i<answers.length;i++){

                $(".ans"+q).append('<br><input type="radio"class="selc" value="'+answers[i]+'" unchecked> '+answers[i]+'<br>')
                console.log(answers[i])
            }
        console.log(objQ.correct_answer)
        $('input').on('click',function(){
            console.log($(this).attr('value'))
            if($(this).attr('value') === objQ.correct_answer ){
                console.log("Correct Answer")
                var val =$('h2').text()
                val=parseInt(val);
                val+=10;
                console.log(val)
                $('h2').text(val)
                $('#'+q).html("")
                $(".ans"+q).html("")
               
            } 
            else{console.log("Wrong Answer");
            $('#'+q).html("")
            $(".ans"+q).html("")
            }
            
        })

        
    })
}
    $('a').on('click',function(){
        for(i=0;i<5;i++){
            $(".ans"+i).html("")
        }
        $.get('https://opentdb.com/api.php?amount=10&type=multiple',getGame)
    });         
})