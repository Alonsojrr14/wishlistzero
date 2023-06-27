window.addEventListener('load', function() {
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = 'Essa página encontra-se em desenvolvimento.\n';
    
    var closeButton = document.createElement('button');
    closeButton.innerHTML = '\nFechar Aviso';
    closeButton.addEventListener('click', function() {
      document.body.removeChild(popup);
    });
    
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
  });
