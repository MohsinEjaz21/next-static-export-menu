import React from 'react'

function Loader() {
  // window = window as any;
  return (
      <div id="preloader" style={{ width: '100%', height: '100%', position: 'fixed', top: 0, bottom: 0, background: '#fff', zIndex: 9999, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video id="editorx-video-preloader" loop autoPlay muted playsInline onPlay={(()=> window.performance.now())} style={{ width: 200 }}>
          <source src="https://static.parastorage.com/services/responsive-editor/1.3074.0/assets/X_load_n1.mp4" type="video/mp4" />
        </video>
      </div>
  )
}

export default Loader