export const openGoogleMap = (location :any) => {
    if (navigator.permissions && navigator.permissions.query) {
      //try permissions APIs first

      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function(result) {
          // Will return ['granted', 'prompt', 'denied']
          const permission = result.state;

      
          if (permission === 'granted') {
            onGetCurrentLocation(location);
            return
          }

          if (permission === 'denied'|| 'prompt') {
            const { lat, lng } = location.geometry.location
            return window.open(
              `https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},18z`,
              '_blank'
            );
            
          }
        });
    } else if (navigator.geolocation) {
      //then Navigation APIs
      onGetCurrentLocation(location);
    }
  };

  const onGetCurrentLocation = (location : any) => {
  
    navigator.geolocation.getCurrentPosition(function(position) {
      //imitate map latlng construct
      

      const { lat, lng } = location.geometry.location;
      return window.open(
        `https://www.google.com/maps/dir/${position.coords.latitude},${position.coords.longitude}/${lat},${lng}`,

        '_blank'
      );
    });
  };