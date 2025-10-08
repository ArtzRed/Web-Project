 // --- Datos iniciales de ejemplo ---
    const sample = [
        {title:'Hola mundo',desc:'Log en consola un "Hola mundo" y muestra alert',code:` var numero = prompt("Ingrese un numero")

        var numerotriple = numero * 3

        console.log("El triple de este numero es" + " " + numerotriple);`} ,
        {title:'Suma simple',desc:'Suma dos números y muestra el resultado',code:`const a=3; const b=7; console.log('Suma:', a+b);`} ,
        {title:'Contar letras',desc:'Cuenta cuantas letras tiene una palabra',code:`const palabra = 'javascript'; console.log(palabra.length);`} ,
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'}, 
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},   
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},   
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factori{return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'},
        {title:'Factorial',desc:'Suma dos números y muestra el resultado',code:'function factorial(n){return n<=1?1:n*factorial(n-1);}console.log(factorial(5));'}
    ];

    

    const $ = id => document.getElementById(id);
    const grid = $('grid');
    const form = $('form');
    const titleIn = $('title');
    const descIn = $('desc');
    const codeIn = $('code');
    const editIndex = $('editIndex');
    const modalBack = $('modalBack');
    const modalTitle = $('modalTitle');
    const modalDesc = $('modalDesc');
    const modalCode = $('modalCode').querySelector('code');
    const preview = $('preview');
    const countEl = $('count');

    let ejercicios = sample.slice();
    function save(){ renderGrid();}

    function renderGrid(){
      grid.innerHTML='';
      ejercicios.forEach((e, i)=>{
        const d = document.createElement('div'); d.className='card'; d.dataset.index = i;
        d.innerHTML = `<div class="num">${i+1}</div><div class="title">${escapeHtml(e.title||'Sin título')}</div>`;
        d.addEventListener('click', ()=>openModal(i));
        grid.appendChild(d);
      });
      countEl.textContent = `${ejercicios.length} Exercises in total`;
      if(ejercicios.length===0){ grid.innerHTML = '<div style="color:var(--muted)">No hay ejercicios. Usa el formulario a la derecha para agregar uno.</div>' }
    }

    function escapeHtml(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

    function openModal(i){
      const item = ejercicios[i];
      modalTitle.textContent = `#${i+1} — ${item.title||'Sin título'}`;
      modalDesc.textContent = item.desc||'';
      modalCode.textContent = item.code||'';
      modalBack.style.display='flex';
      // attach current index to actions
      $('runBtn').dataset.index = i;
      $('editBtn').dataset.index = i;
      $('deleteBtn').dataset.index = i;
      $('copyBtn').dataset.index = i;
      // clear preview
      preview.srcdoc = '<html><body style="font-family:system-ui;color:#111;background:#fff;padding:12px"><small>Haz click en Run para ejecutar este ejercicio (sandboxed).</small></body></html>';
    }

    function closeModal(){ modalBack.style.display='none'; }

    // run code inside iframe sandbox
    function runCode(i){
      const code = ejercicios[i].code || '';
      // prepare a small runner that captures console.log
      const src = `<!doctype html><html><head><meta charset="utf-8"></head><body><pre id="out" style="white-space:pre-wrap;font-family:monospace;padding:10px"></pre><script>const out=document.getElementById('out');(function(){const originalLog=console.log;console.log=function(){originalLog.apply(console,arguments);out.textContent += Array.from(arguments).map(a=>{try{return JSON.stringify(a)}catch(e){return String(a)}}).join(' ') + '\\n'};try{\n${code.replace(/<\/script>/gi,'<\\/script>')}\n}catch(e){out.textContent += 'Error: '+e}\n})();<\/script></body></html>`;
      preview.srcdoc = src;
    }


    // modal actions
    $('closeModal').addEventListener('click', closeModal);
    modalBack.addEventListener('click', (ev)=>{ if(ev.target===modalBack) closeModal(); });

    $('runBtn').addEventListener('click', ()=>{ const i = Number($('runBtn').dataset.index); runCode(i); });
    $('editBtn').addEventListener('click', ()=>{
      const i = Number($('editBtn').dataset.index);
      const it = ejercicios[i]; editIndex.value = i; titleIn.value = it.title; descIn.value = it.desc; codeIn.value = it.code; closeModal();
    });
    $('deleteBtn').addEventListener('click', ()=>{
      const i = Number($('deleteBtn').dataset.index);
      if(confirm('Eliminar ejercicio #' + (i+1) + '?')){ ejercicios.splice(i,1); save(); closeModal(); }
    });
    $('copyBtn').addEventListener('click', async ()=>{
      const i = Number($('copyBtn').dataset.index);
      try{ await navigator.clipboard.writeText(ejercicios[i].code||''); alert('Código copiado al portapapeles'); }catch(e){ alert('No se pudo copiar'); }
    });


    // inicial render
    renderGrid();