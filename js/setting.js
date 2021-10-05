let returning=$('#返回');
    returning.click(()=>{       
        location.href="main.html";
    });
    let sure=$('#确定');
    let playernum=0;
    sure.click(()=>{
        let p1=$('input#first').val();
        let p2=$('input#second').val();
        let p3=$('input#third').val();
        let p4=$('input#fourth').val();
        let isNoInput = (value) => {
	return String(value).replace(/(^\s*)|(\s*$)/g, '') === ''
    }
        if(!isNoInput($('input#first').val()))
    {
        if (localStorage.p1name) {
            localStorage.p1name =p1;
        } 
        else localStorage.setItem("p1name",p1);
        playernum++;
    }
        if(!isNoInput($('input#second').val()))
    {
        if (localStorage.p2name) {
            localStorage.p2name =p2;
        } 
        else localStorage.setItem("p2name",p2);
        playernum++;
    }
        if(!isNoInput($('input#third').val()))
    {
        if (localStorage.p3name) {
            localStorage.p3name =p3;
        } 
        else localStorage.setItem("p3name",p3);
        playernum++;
    }
        if(!isNoInput($('input#fourth').val()))
    {
        if (localStorage.p4name) {
            localStorage.p4name =p4;
        } 
        else localStorage.setItem("p4name",p4);
        playernum++;
    }    
        if (localStorage.playernum) {
            localStorage.playernum =playernum;
        } 
        else localStorage.setItem("playernum",playernum);
    
        location.href="game.html";
     });
