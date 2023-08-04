import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Articles() {
  useEffect(() => {
    Swal.fire({
      icon: 'info',
      title: 'Under Development',
      text: 'This section is still under development. Coming soon!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to the homepage when "OK" is pressed
        window.location.href = '/'; // This will directly change the URL and trigger a new page load
      }
    });
  }, []);

  return (
    <div>
      Articles
      <Link to="/">Go back to homepage</Link> {/* You can use Link to navigate to the homepage */}
    </div>
  );
}

export default Articles;
