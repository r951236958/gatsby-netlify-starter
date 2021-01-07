import React from "react"
//import { useLocation } from "react-router-dom"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { TextField } from "@react-md/form"
import Container from "../components/Container"
import AutoTooltip from "../components/AutoTooltip"
//import MenuList from "../components/MenuList"
import { Button } from "@react-md/button"

//import LinkList from "../components/LinkList"
//import CustomCheckboxDemo from "../components/CustomCheckboxDemo"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class About extends React.Component {
  state = {
    value: "",
    value2: "",
    copied: false,
    copied2: false,
  }
  render() {
    const siteTitle = "All about Example"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Components Test" />
        <Container>
          <AutoTooltip />
        </Container>
        <Container>
          <input
            value={this.state.value}
            onChange={({ target: { value } }) =>
              this.setState({ value, copied: false })
            }
          />

          <CopyToClipboard
            text={this.state.value}
            onCopy={() => this.setState({ copied: true })}
          >
            <Button themeType="outline">Copy</Button>
          </CopyToClipboard>

          {this.state.copied ? (
            <span style={{ color: "red", marginLeft: "1rem" }}>
              {this.state.value}
            </span>
          ) : null}
        </Container>
        <Container>
          <TextField
            id="text-field-1"
            aria-describedby="text-field-1-message"
            label="Text"
            placeholder="Copy to clipboard"
            value2={this.state.value}
            onChange={({ target: { value2 } }) =>
              this.setState({ value2, copied2: false })
            }
          />
          <CopyToClipboard
            text={this.state.value2}
            onCopy={() => this.setState({ copied2: true })}
          >
            <Button themeType="outline">Copy</Button>
          </CopyToClipboard>

          {this.state.copied2 ? (
            <span style={{ color: "red", marginLeft: "1rem" }}>
              {this.state.value2}
            </span>
          ) : null}
        </Container>
      </Layout>
    )
  }
}

export default About
