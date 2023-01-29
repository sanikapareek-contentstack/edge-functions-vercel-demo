<h1>Modular JavaScript Components</h1>
<h3>Creating reusable counter and timer components.</h3>
<p>
<ul>
<li>Counter and timer components are designed using DOM manipulation.</li>
<li>render() function is used to design the HTML. It returns "div" element which contains the whole component.</li>
<li>mount() function is used to mount the component at the desired place. It takes the element where the component needs to be mounted as the input.</li>
<li>A unique ID generation function is created so that each instance can work independently.</li>
<li>Bind function is used so that the object calling the function becomes this and not the element (like button) calling the function becomes this.</li>
</ul>
</p>
<h2>Counter Component</h2>
<p>Counter component has two button namely '+' and '-'. On clicking on '+' button the count increments by 1 and on clicking on '-' button count decrements by 1.</p>
<h2>Timer Component</h2>
<p>Timer is of the format (hrs:mins:secs). Timer component has three button namely 'Start', 'Pause' and 'Reset'. On clicking on 'Start' button the timer will start, on clicking on 'Pause' button timer will pause and on clicking on 'Reset' button timer will reset to 00:00:00.</p>
