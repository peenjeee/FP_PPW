function calculateWinRate(){var e=document.getElementById("totalGames").value,a=document.getElementById("totalWins").value;e&&a?parseInt(a)>parseInt(e)?alert("Total menang tidak bisa lebih besar dari Total Game!"):(document.getElementById("winRateResult").value=(a/e*100).toFixed(1)+"%",document.getElementById("lossesResult").value=(e-a).toFixed(0)+" Match"):alert("Harap masukkan total game dan match menang!")}function calculateWinsForDesiredWinRate(){var e=parseFloat(document.getElementById("totalGames").value),a=parseFloat(document.getElementById("currentWinRate").value),t=parseFloat(document.getElementById("desiredWinRate").value);if(t<a){if(isNaN(e)||isNaN(a)||isNaN(t))alert("Masukkan total game dan winrate sekarang serta winrate kemudian!");else if(0>=parseFloat(t))alert("Winrate yang diinginkan tidak boleh sama atau lebih dari 0!");else{var l=parseFloat(e*(a/100)),i=parseInt(parseFloat(l/(t/100))-e);document.getElementById("additionalWinsNeeded").value=i.toFixed(0)+" Kalah"}}else if(isNaN(e)||isNaN(a)||isNaN(t))alert("Masukkan total game dan winrate sekarang serta winrate kemudian!");else if(parseFloat(t)>=100)alert("Winrate yang diinginkan tidak boleh sama atau lebih dari 100!");else{var n=parseFloat(t-a)*e,d=parseFloat(100-t),s=parseInt(n/d);document.getElementById("additionalWinsNeeded").value=s.toFixed(0)+" Menang"}}function calculateWinsLoss(){var e=parseFloat(document.getElementById("totalGames").value),a=parseFloat(document.getElementById("currentWinRate").value);if(isNaN(e)||isNaN(a))alert("Masukkan total game dan winrate sekarang!");else if(parseFloat(a)>100||0>parseFloat(a))alert("Winrate tidak bisa kurang dari 0 atau lebih dari 100!");else{var t=parseFloat(e*a/100),l=parseFloat(e-t);document.getElementById("additionalWins").value=t.toFixed(0)+" Match",document.getElementById("additionalLoss").value=l.toFixed(0)+" Match"}}function wrnaik(){var e=parseFloat(document.getElementById("totalGames").value),a=parseFloat(document.getElementById("currentWinRate").value),t=parseFloat(document.getElementById("desiredWinstreak").value);if(isNaN(e)||isNaN(a)||isNaN(t))alert("Masukkan total game dan winrate sekarang serta match winstreak!");else if(parseFloat(a)>100||0>parseFloat(a))alert("Winrate tidak bisa kurang dari 0 atau lebih dari 100!");else{var l=parseFloat(e*a/100),i=parseFloat(l+t),n=parseFloat(e+t),d=parseInt(i/n*100);document.getElementById("hasilwin").value=d.toFixed(1)+"%"}}function wrlose(){var e=parseFloat(document.getElementById("totalGames").value),a=parseFloat(document.getElementById("currentWinRate").value),t=parseFloat(document.getElementById("desiredLosestreak").value);if(isNaN(e)||isNaN(a)||isNaN(t))alert("Masukkan total game dan winrate sekarang serta match winstreak!");else if(parseFloat(a)>100||0>parseFloat(a))alert("Winrate tidak bisa kurang dari 0 atau lebih dari 100!");else{var l=parseFloat(e*a/100),i=parseFloat(l-t),n=parseFloat(e+t),d=parseInt(i/n*100);document.getElementById("hasillose").value=d.toFixed(1)+"%"}}function hitcv(){var e=parseFloat(document.getElementById("cr").value),a=parseFloat(document.getElementById("cd").value);if(isNaN(a)||isNaN(e))alert("Masukkan CR dan CD!");else{var t=parseFloat(2*e+a);t<0&&t<=10?document.getElementById("hasil").value=t.toFixed(1)+"% No upgrades":t>10&&t<=20?document.getElementById("hasil").value=t.toFixed(1)+"% Rata-Rata":t>20&&t<=30?document.getElementById("hasil").value=t.toFixed(1)+"% Bagus":t>30&&t<=40?document.getElementById("hasil").value=t.toFixed(1)+"% Sangat Bagus":t>40&&t<=50?document.getElementById("hasil").value=t.toFixed(1)+"% Permata":t>50&&t<=60?document.getElementById("hasil").value=t.toFixed(1)+"% Sempurna":document.getElementById("hasil").value="Nilai CV tidak valid"}}function hitch(){var e=parseFloat(document.getElementById("cr").value),a=parseFloat(document.getElementById("cd").value);if(isNaN(a)||isNaN(e))alert("Masukkan CR dan CD!");else{var t=parseFloat(2*e+a);0===t?document.getElementById("hasil").value=t.toFixed(1)+"% No upgrades":t<200?document.getElementById("hasil").value=t.toFixed(1)+"% Kurang":t>=200&&t<240?document.getElementById("hasil").value=t.toFixed(1)+"% Normal":t>=240&&t<=300?document.getElementById("hasil").value=t.toFixed(1)+"% Ideal":t>300?document.getElementById("hasil").value=t.toFixed(1)+"% Sangat Bagus":document.getElementById("hasil").value="Nilai CV tidak valid"}}function hitdmg(){var e=parseFloat(document.getElementById("atk").value),a=parseFloat(document.getElementById("db").value),t=parseFloat(document.getElementById("sd").value),l=parseFloat(document.getElementById("lc").value),i=parseFloat(document.getElementById("lm").value),n=parseFloat(document.getElementById("rm").value),d=parseFloat(document.getElementById("crit").value);if(isNaN(e)||isNaN(a)||isNaN(t)||isNaN(l)||isNaN(i)||isNaN(n)||isNaN(d))alert("Masukkan semua stats!");else{var s=parseFloat(e*(1+a/100)*(t/100)),u=parseFloat((l+100)/(l+i+200)),r=parseFloat(1-n/100),$=parseFloat(5*i+500);parseInt(100*parseFloat($/($+5*l+500)));var g=parseInt(s*u*r);document.getElementById("hasil").value=g.toFixed(0);var m=parseInt(g*(1+d/100));document.getElementById("hasilcrit").value=m.toFixed(0)}}!function(){"use strict";var e=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(e).forEach(function(e){e.addEventListener("button",function(a){e.checkValidity()||(a.preventDefault(),a.stopPropagation()),e.classList.add("was-validated")},!1)})}();
