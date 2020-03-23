document.querySelectorAll('.JSCode').forEach(el => {
  CodeMirror.fromTextArea(el, {
    mode: 'javascript',
    theme: 'shadowfox',
    lineNumbers: true,
    readOnly: true
  })
})

