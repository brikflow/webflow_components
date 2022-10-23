
function createmap(initobj)
{
let projname = document.getElementsByClassName(initobj.title);
let projlat = document.getElementsByClassName(initobj.latitude);
let projlong = document.getElementsByClassName(initobj.longitude);
let projimg = document.getElementsByClassName(initobj.listingimage);
let projdesc = document.getElementsByClassName(initobj.listingdescription)
let markerarr = [];

let loc =[];
for (i = 0; i < projname.length; i++) { 
var singimg = projimg[i].src;
if(projlat[i].innerHTML != '' && projlong[i].innerHTML != '') {
loc.push({tittle : projname[i].innerHTML, lat: Number(projlat[i].innerHTML) , lng : Number(projlong[i].innerHTML),
contdiv : getcontentdiv(projname[i].innerHTML,singimg,projdesc[i].innerHTML)
});
}
}



function getcontentdiv(tittle,src,desc)
  {
  return  '<div class="info-box">' +
        '<img class="projimg" src="'+src+'"/>' + 
      '<p class="projname">'+tittle+'</p>' +
      '<p class="projdesc">'+desc+'</p>' +
      "</div>";
  }

  const map = new google.maps.Map(document.getElementById('map-div'), {
    zoom: 12,
    center: loc[0]
  });
  
  const infowindow = new google.maps.InfoWindow();

   var marker, i;
    for (i = 0; i < loc.length; i++) {  
	 marker = new google.maps.Marker({
    position: loc[i],
    map,
    title: loc[i].tittle
  });
  markerarr.push(marker);
  addclickevent(marker,loc[i].contdiv);
	}

   function addclickevent(marker,content) {
  marker.addListener("click", () => {
    infowindow.setContent(content);
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false
    });
  });
  }

$(".w-dyn-items .w-dyn-item").click(function () 
{
 //  new google.maps.event.trigger( markerarr[$(this).index()], 'click' ); 
});

  
}

