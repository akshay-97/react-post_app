import React, { Component } from 'react';

class PostsItem extends Component {
    render() {
        return (
            <div class="row">
              <div class="col-sm-12">
                <h4>Understanding the Bootstrap Grid</h4>
                <hr />
              </div>
              <div class="col-sm-2">
                <span class="label label-default label-arrow label-arrow-right pull-right">
                  1 Hour Ago
                </span>
              </div>
              <div class="col-sm-10">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia cor
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minim aliquid ex ea commodi
                  consequatur?
                </p>
                <div class="pull-right">
                  <span class="label label-warning">web-development</span>{" "}
                  <span class="label label-warning">bootstrap</span>{" "}
                  <span class="label label-warning">responsive</span>
                </div>
                <p>
                  <button class="btn btn-default">More</button>
                </p>
              </div>
            </div>
        );
    }
}

export default PostsItem;
