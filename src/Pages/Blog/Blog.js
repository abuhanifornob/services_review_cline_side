import React from 'react';

const Blog = () => {
  return (
    <div className='m-8 gap-4'>
      <h3 className='text-3xl font-bolder text-orange-600 m-5 shadow-2xl'>This is My Blog </h3>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box ">
        <div className="collapse-title text-xl font-medium">

          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p className='text-start'> <span className='font-bolder text-2xl ml-2'>1.Type</span> <br />
            SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p>
          <br />
          <p className='text-start'> <span className='font-bolder text-2xl ml-2'>2.Language –</span> <br />
            SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
            A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.  </p> <br />

          <p className='text-start'> <span className='font-bolder text-2xl ml-2'>3.Scalability –</span> <br />
            In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.  </p>
          <br />

          <p className='text-start'> <span className='font-bolder text-2xl ml-2'>4.Structure –</span> <br />
            SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.   </p>
          <br />


        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p className='text-start'> <span className='font-bolder text-2xl ml-2'>What is JWT (JSON Web Token)?</span> <br />
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)
          </p> <br />
          <p className='text-start'> <span className='font-bolder text-2xl ml-2'>What is JWT (JSON Web Token) Does Work?</span> <br />
            In short, JWTs are used as a secure way to authenticate users and share information. Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn't been altered after it was signed by the issuer. </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p className='text-start'> <span className='font-bolder text-2xl ml-2'>difference between javascript and NodeJS?</span> <br />
            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
        <p className='text-start'> <span className='font-bolder text-2xl ml-2'> NodeJS handle multiple requests at the same time?</span> <br />
        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
          </p>
        </div>
      </div>
    </div>

  );
};

export default Blog;