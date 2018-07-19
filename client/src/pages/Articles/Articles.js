import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn, TextArea } from "../../components/Form"
import { ListItem, List } from "../../components/List";

class Articles extends Component {
    state = {
        articles: [],
        title: "",
        url: "",
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
          .then(res =>
             this.setState({ articles: res.data, title: "", url: ""}) 
          )
          .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.url) {
            API.saveArticle({
              title: this.state.title,
              url: this.state.url,
              preview: this.state.preview
            })
              .then(res => this.loadArticles())
              .catch(err => console.log(err));
        }
    };

    render() {
        return (
          <Container fluid>
            <Row>
                <Col size="md-12">
                    <h2>
                    Add Article
                    </h2>
                    <form>
                        <Input
                          value={this.state.title}
                          onChange={this.handleInputChange}
                          name="title"
                          placeholder="Title of Article (required)"
                        />
                        <Input
                          value={this.state.url}
                          onChange={this.handleInputChange}
                          name="url"
                          placeholder="Paste url here (required)"
                        />
                        <TextArea
                        value={this.state.preview}
                        onChange={this.handleInputChange}
                        name="preview"
                        placeholder="Preview (Optional)"
                        />
                        <FormBtn
                          disabled={!(this.state.title && this.state.url)}
                          onClick={this.handleFormSubmit}
                        >
                        Submit Article
                        </FormBtn>
                    </form>
                </Col>
                <Col size="md-12">
                   <h2>
                   Saved Articles
                   </h2>
                   {this.state.articles.length ? (
                   <List>
                   {this.state.articles.map(article => ( 
                     <ListItem key={article._id}>
                       <Link to={"/articles/" + article._id}>
                       <strong>
                           {article.title} <br></br>
                           {article.url}
                       </strong>
                       </Link>
                       <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                     </ListItem>  
                   ))}
                   </List>
                   ) : (
                       <h3> No Results to Display</h3>
                   )}
                </Col>
                <Col size="md-12">
                    <h3>
                   {/* Saved Articles */}
                    </h3>
                </Col>
            </Row>
          </Container>
        )
    }
}

export default Articles;