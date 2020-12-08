import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  TVResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
}) => null;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  TVResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
