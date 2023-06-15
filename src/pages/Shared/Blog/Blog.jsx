import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mockup-window border bg-base-300 pb-20">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200 mx-10 rounded-lg"
        >
          <div className="collapse-title text-xl font-medium">
            1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p><span className="font-bold">Access Token:</span> An access token is a credential that is used to access protected resources on behalf of a user or an application. It is typically a string of characters that represents the authorization granted to the user. Access tokens are time-limited and have an expiration period, after which they become invalid.</p>
            <p><span className="font-bold">Refresh Token:</span> A refresh token is a credential used to obtain a new access token after the previous one expires. It's a long-lived token that can be securely stored on the client-side. When the access token expires, the refresh token is used to request a new access token without requiring the user to log in again.</p> <br />
            <p>For client-side storage, access tokens can be stored in HTTP-only cookies or in the browser's local storage. Refresh tokens should be stored in a more secure manner, such as encrypted HTTP-only cookies with the "Secure" flag enabled or in a server-side session associated with the user's session ID. Storing them securely helps prevent unauthorized access to these tokens.</p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-200 mx-10 rounded-lg"
        >
          <div className="collapse-title text-xl font-medium">
            2. Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p><span className="font-bold">SQL:</span>SQL databases follow a structured relational model with fixed schemas, suitable for complex queries and structured data. They scale vertically, use SQL as the query language, and offer ACID compliance. Common in traditional enterprise systems.</p>
            <p><span className="font-bold">NoSQL:</span>NoSQL databases support flexible data models (key-value, document, etc.) and dynamic schemas, ideal for unstructured or rapidly changing data. They scale horizontally, have varying query languages, and may prioritize scalability over strict consistency. Often used in large-scale applications, real-time analytics, and content management systems.</p>
          </div>
        </div>        
        <div
          tabIndex={2}
          className="collapse collapse-plus border border-base-300 bg-base-200 mx-10 rounded-lg"
        >
          <div className="collapse-title text-xl font-medium">
            3. What is express js? What is Nest JS ?
          </div>
          <div className="collapse-content">
            <p><span className="font-bold">Express:</span> Express.js is a minimal and flexible web application framework for Node.js. It is widely used for building web applications and APIs. Express.js provides a simple and intuitive interface to handle HTTP requests and responses, manage routing, handle middleware, and enable the creation of dynamic web applications. It is known for its lightweight and unopinionated nature, allowing developers to have more control and flexibility in designing their applications.</p>
            <p><span className="font-bold">Nest:</span> NestJS, on the other hand, is a progressive TypeScript-based framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides a higher level of abstraction and structure to web application development. NestJS follows the architectural style of Angular, utilizing decorators, modules, providers, and controllers to create a modular and organized codebase. It supports features like dependency injection, middleware, and decorators for routing, making it suitable for complex enterprise applications.</p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-plus border border-base-300 bg-base-200 mx-10 rounded-lg"
        >
          <div className="collapse-title text-xl font-medium">
            4. What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p><span className="font-bold">MongoDB aggregate:</span> The MongoDB aggregate framework is a powerful feature that allows for advanced data analysis and manipulation operations. It operates using a pipeline concept, where data flows through multiple stages, each performing a specific operation. The pipeline stages include various operations such as filtering, grouping, sorting, projecting, and performing calculations. The input for the pipeline is a collection of MongoDB documents, and the stages are executed in the order they appear. Each stage modifies or transforms the data based on the specified operation, and the intermediate results are passed along to subsequent stages. The final stage produces the desired result, which can be aggregated documents, statistical calculations, or any other output based on the operations performed. The aggregate framework provides a flexible and efficient way to process and analyze data within the MongoDB database.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
