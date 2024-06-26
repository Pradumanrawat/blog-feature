import React, { useState } from "react";

const BlogDetail = () => {
  return (
    <div className="h-[100vh] blog-page blog-detail">
      <div className="container">
        <img src="https://picsum.photos/200" className="image" />

        <div className="blog-detail-card">
          <div className="content">
            <div className="d-flex gap-3">
              <p className="author">Jane Doe</p>
              <p className="fw-bold">|</p>
              <p className="date">June 20, 2024</p>
            </div>
            <h1 className="title fs-1 fw-medium my-2">Understanding React Hooks</h1>
            <p className="summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              obcaecati hic architecto incidunt dolorem mollitia deleniti, sunt
              molestiae dolorum odio suscipit itaque dolore est, assumenda
              consectetur illum asperiores deserunt fugiat! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Placeat obcaecati hic
              architecto incidunt dolorem mollitia deleniti, sunt molestiae
              dolorum odio suscipit itaque dolore est, assumenda consectetur
              illum asperiores deserunt fugiat! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Placeat obcaecati hic architecto
              incidunt dolorem mollitia deleniti, sunt molestiae dolorum odio
              suscipit itaque dolore est, assumenda consectetur illum asperiores
              deserunt fugiat! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Placeat obcaecati hic architecto incidunt
              dolorem mollitia deleniti, sunt molestiae dolorum odio suscipit
              itaque dolore est, assumenda consectetur illum asperiores deserunt
              fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat obcaecati hic architecto incidunt dolorem mollitia
              deleniti, sunt molestiae dolorum odio suscipit itaque dolore est,
              assumenda consectetur illum asperiores deserunt fugiat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;