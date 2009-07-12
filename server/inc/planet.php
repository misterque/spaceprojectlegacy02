<div id="masterplan" style="position: absolute; top: 50px; left: 500px; width: 500px; height: 500px; border: 1px solid black; overflow: hidden;">
  <div id="map" style="position: absolute; top: 0px; left: 0px;"  onmousedown="scrol=1">
    <div id="map_content" style="position: absolute; top: 0px; left: -1000px; width: 3000px;"  >
    
      <img src="res/mars.jpg" style="position: absolute; top: 0px; left:     0px;" />
      <img src="res/mars.jpg" style="position: absolute; top: 0px; left:  1000px;" />
      <img src="res/mars.jpg" style="position: absolute; top: 0px; left:  2000px;" />
      
      <div style="position: absolute; left: 0px; top: 0px; height: 500px; width: 3000px; z-index: 100;">
        <svg:svg version="1.1" id="svgbla" baseProfile="full" width="3000px" height="500px">
          <svg:circle cx="460" cy="256px" r="10px" fill="none" stroke="#ff0000" stroke-width="1px"/>
          <svg:circle cx="1460" cy="256px" r="10px" fill="none" stroke="#00ff00" stroke-width="1px"/>
          <svg:circle cx="2460" cy="256px" r="10px" fill="none" stroke="#0000ff" stroke-width="1px"/>
        </svg:svg>
      </div>
      
      <div style="position: absolute; left: 0px; top: 0px; width: 3000px; height: 500px; z-index: 200;" onmousedown="scrol=1"> </div>
      <script type="text/javascript">
        alert("test");
        SetLocation ( 460,   256);  
        SetLocation ( 0,   0);  
        SetLocation ( 200,   100);  
        SetLocation ( 400,   200);  
        SetLocation ( 600,   300);  
        SetLocation ( 800,   400);  
	LineLine( 100, 300, 900, 300);
	LineLine( 200, 100, 460, 256);
	LineLine( 200, 100, 800, 400);
      </script>
    </div>
  </div>
</div>
